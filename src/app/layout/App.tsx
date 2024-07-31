import { useState } from "react";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import NavBar from "./nav/NavBar";
import { Container } from "semantic-ui-react";
import { AppEvent } from "../types/event";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  function handleSelectEvent(event: AppEvent | null) {
    setSelectedEvent(event);
    setOpenForm(true);
  }

  function handleCreateOpenForm() {
    setSelectedEvent(null);
    setOpenForm(true);
  }

  return (
    <>
      <NavBar setOpenForm={handleCreateOpenForm} />
      <Container className="main">
        <EventDashboard
          openForm={openForm}
          setOpenForm={setOpenForm}
          selectedEvent={selectedEvent}
          selectEvent={handleSelectEvent}
        />
      </Container>
    </>
  );
}

export default App;
