import { useState } from "react";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import NavBar from "./nav/NavBar";
import { Container } from "semantic-ui-react";

function App() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <NavBar setOpenForm={setOpenForm} />
      <Container className="main">
        <EventDashboard openForm={openForm} setOpenForm={setOpenForm} />
      </Container>
    </>
  );
}

export default App;
