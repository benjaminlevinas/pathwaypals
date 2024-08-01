import { ChangeEvent, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm() {
  const initialValues = {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function onSubmit() {
    console.log(values);
    // selectedEvent
    //   ? updateEvent({ ...selectedEvent, ...values })
    //   : addEvent({
    //       ...values,
    //       id: createId(),
    //       hostedBy: "bob",
    //       attendees: [],
    //       hostPhotoURL: "",
    //     });
    // setOpenForm(false);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content="Create new meetup" />
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
        <Button type="button" floated="right" content="Cancel" />
      </Form>
    </Segment>
  );
}
