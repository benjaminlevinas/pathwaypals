import { AppEvent } from "../../../app/types/event";
import EventListItem from "./EventListItem";

type Props = {
  events: AppEvent[];
};

export default function EventList({ events }: Props) {
  return (
    <div>
      {events.map((event: any) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </div>
  );
}
