import { ChangeEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { AppEvent } from "../../../app/types/event";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";

export default function EventForm() {
  let { id } = useParams<{ id: string }>(); // Ensure 'id' is typed as a string

  const event = useSelector((state: RootState) =>
    state.events.events.find((e: AppEvent) => e.id === id)
  );

  const dispatch = useDispatch();

  const initialValues =
    event !== undefined
      ? event
      : {
          title: "",
          category: "",
          description: "",
          city: "",
          venue: "",
          date: "",
        };

  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  function onSubmit() {
    id = id ?? createId();
    console.log(values);
    event !== undefined
      ? dispatch(updateEvent({ ...event, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id,

            hostedBy: "bob",
            attendees: [],
            hostPhotoURL: "",
          })
        );
    navigate(`/events/${id}`);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header
        content={event !== undefined ? "Update meetup" : "Create meetup"}
      />
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <input
            value={values.title}
            name="title"
            onChange={(event) => handleInputChange(event)}
            type="text"
            placeholder="Meetup Title"
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            value={values.category}
            name="category"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            name="city"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            value={values.venue}
            name="venue"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            name="date"
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          type="button"
          floated="right"
          content="Cancel"
          as={Link}
          to="/meetups"
        />
      </Form>
    </Segment>
  );
}
