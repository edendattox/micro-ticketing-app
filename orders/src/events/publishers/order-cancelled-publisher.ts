import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@eden-d-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
