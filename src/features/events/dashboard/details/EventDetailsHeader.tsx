import { Link } from "react-router-dom";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { AppEvent } from "../../../../app/types/event";

type Props = {
  event: AppEvent | undefined; // Allow undefined to handle the loading state
};

export default function EventDetailsHeader({ event }: Props) {
  if (!event) {
    return (
      <Segment basic>
        <Header content="Loading event..." />
        {/* You can replace this with a spinner or any other loading indicator */}
      </Segment>
    );
  }

  const eventImageStyle = {
    filter: "brightness(30%)",
  };

  const eventImageTextStyle = {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: "100%", // Fixed typo from 'with' to 'width'
    height: "auto",
    color: "white",
  };

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>{event.date}</p>
                <p>
                  Hosted by <strong>{event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS MEETUP</Button>

        <Button
          as={Link}
          to={`/manage/${event.id}`}
          color="orange"
          floated="right"
        >
          Manage Meetup
        </Button>
      </Segment>
    </Segment.Group>
  );
}
