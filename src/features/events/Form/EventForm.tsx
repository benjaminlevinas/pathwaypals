import { Button, Form, Header, Segment } from "semantic-ui-react";

type Props = {
  openForm: boolean;
  setOpenForm: (value: boolean) => void;
};

export default function EventForm({ setOpenForm, openForm }: Props) {
  return (
    <Segment clearing>
      <Header content="Create new meetup" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Meetup Title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Location" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Date" />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => setOpenForm(!openForm)}
          type="button"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
