import {
  Button,
  Icon,
  Item,
  ItemGroup,
  List,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/event";

type Props = {
  event: AppEvent;
  selectEvent: (event: AppEvent) => void;
  deleteEvent: (eventID: string) => void;
};

export default function EventListItem({
  event,
  selectEvent,
  deleteEvent,
}: Props) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src={event.hostPhotoURL || "/user.png"}
            ></Item.Image>
            <Item.Content>
              <Item.Header content={event.title}></Item.Header>
              <Item.Description>{event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee: any) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>
          {event.description}
          <Button
            color="red"
            floated="right"
            content="Delete"
            onClick={() => deleteEvent(event.id)}
          ></Button>
          <Button
            color="green"
            floated="right"
            content="View"
            onClick={() => selectEvent(event)}
          ></Button>
        </span>
      </Segment>
    </SegmentGroup>
  );
}
