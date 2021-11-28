import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be provided");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be provided");
  }

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  try {
    await natsWrapper.connect("ticketing", "haf", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connection closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close()); // SIGINT = Interrupt
    process.on("SIGTERM", () => natsWrapper.client.close()); // SIGTERM = Terminate

    await mongoose.connect(process.env.MONGO_URI, options);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
};

start();
