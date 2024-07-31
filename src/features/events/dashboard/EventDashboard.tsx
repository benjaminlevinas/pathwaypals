import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../Form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { AppEvent } from "../../../app/types/event";
import { useEffect, useState } from "react";

type Props = {
  openForm: boolean;
  setOpenForm: (value: boolean) => void;
  selectEvent: (event: AppEvent | null) => void;
  selectedEvent: AppEvent | null;
};

export default function EventDashboard({
  openForm,
  setOpenForm,
  selectEvent,
  selectedEvent,
}: Props) {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  function addEvent(newEvent: AppEvent) {
    setEvents((prevState) => [...prevState, newEvent]);
  }

  function updateEvent(updatedEvent: AppEvent) {
    setEvents((prevState) =>
      prevState.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    selectEvent(null);
    setOpenForm(false);
  }

  function deleteEvent(eventID: string) {
    setEvents(events.filter((event) => event.id !== eventID));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {openForm && (
          <EventForm
            setOpenForm={setOpenForm}
            openForm={openForm}
            addEvent={addEvent}
            updateEvent={updateEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : 0}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
