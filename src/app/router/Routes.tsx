import { createBrowserRouter } from "react-router-dom";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import App from "../layout/App";
import EventForm from "../../features/events/Form/EventForm";
import EventDetails from "../../features/events/dashboard/details/EventDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/meetups",
        element: <EventDashboard />,
      },
      {
        path: "/events/:id",
        element: <EventDetails />,
      },
      {
        path: "/manage/:id",
        element: <EventForm />,
      },
      {
        path: "/createMeetup",
        element: <EventForm />,
      },
    ],
  },
]);
