import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@eden-d-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
