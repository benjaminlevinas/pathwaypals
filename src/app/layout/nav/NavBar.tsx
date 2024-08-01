import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignedOutButtons from "./SignedOutButtons";
import SignedInMenu from "./SignedInMenu";

export default function NavBar() {
  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header as={NavLink} to="/">
          <img src="/logo.png" alt="logo" className="ui mini image" />
          Pathway Pals
        </MenuItem>
        <MenuItem name="Meetups" as={NavLink} to="/meetups" />
        <MenuItem>
          <Button
            as={NavLink}
            to="createMeetup"
            floated="right"
            positive={true}
            inverted={true}
            content="Create Meetup"
            style={{ backgroundColor: "#335577" }}
          />
        </MenuItem>
        <SignedInMenu />
      </Container>
    </Menu>
  );
}
