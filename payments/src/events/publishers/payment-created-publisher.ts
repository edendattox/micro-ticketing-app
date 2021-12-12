import {
  Publisher,
  PaymentCreatedEvent,
  Subjects,
} from "@eden-d-tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
