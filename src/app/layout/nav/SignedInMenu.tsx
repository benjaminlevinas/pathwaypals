import { Link, useNavigate } from "react-router-dom";
import { Menu, Image, Dropdown, DropdownItem } from "semantic-ui-react";

type Props = {
  setAuth: (auth: boolean) => void;
};

export default function SignedInMenu({ setAuth }: Props) {
  const navigate = useNavigate();

  function handleSignOut() {
    setAuth(false);
    navigate("/");
  }

  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/user.png" />
      <Dropdown pointing="top left" text="Bob">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createMeetup"
            text="Create Meetup"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item onClick={handleSignOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
