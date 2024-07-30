import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

type Props = {
  setOpenForm: (open: boolean) => void;
};

export default function NavBar({ setOpenForm }: Props) {
  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header>
          <img src="/logo.png" alt="logo" className="ui mini image" />
          Pathway Pals
        </MenuItem>
        <MenuItem name="Meetups" />
        <MenuItem>
          <Button
            onClick={() => setOpenForm(true)}
            floated="right"
            positive={true}
            inverted={true}
            content="Create Meetup"
          />
        </MenuItem>
        <MenuItem position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
