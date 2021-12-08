import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@eden-d-tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
