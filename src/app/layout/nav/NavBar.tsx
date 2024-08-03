import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignedOutButtons from "./SignedOutButtons";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";

export default function NavBar() {
  const [auth, setAuth] = useState(false);

  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header as={NavLink} to="/">
          <img src="/logo.png" alt="logo" className="ui mini image" />
          Pathway Pals
        </MenuItem>
        <MenuItem name="Meetups" as={NavLink} to="/meetups" />
        <MenuItem name="Scratch" as={NavLink} to="/scratch" />

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
        {auth ? (
          <SignedInMenu setAuth={setAuth} />
        ) : (
          <SignedOutButtons setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
}
