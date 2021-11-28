import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@eden-d-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
