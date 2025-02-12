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
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../eventSlice";

type Props = {
  event: AppEvent;
};

export default function EventListItem({ event }: Props) {
  const dispatch = useDispatch();

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
            onClick={() => dispatch(deleteEvent(event.id))}
            color="red"
            floated="right"
            content="Delete"
          ></Button>
          <Button
            as={Link}
            to={`/events/${event.id}`}
            color="green"
            floated="right"
            content="View"
          ></Button>
        </span>
      </Segment>
    </SegmentGroup>
  );
}
