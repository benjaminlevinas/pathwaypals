import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../Form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { AppEvent } from "../../../app/types/event";
import { useEffect, useState } from "react";

type Props = {
  openForm: boolean;
  setOpenForm: (value: boolean) => void;
};

export default function EventDashboard({ openForm, setOpenForm }: Props) {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {openForm && (
          <EventForm setOpenForm={setOpenForm} openForm={openForm} />
        )}
      </Grid.Column>
    </Grid>
  );
}
