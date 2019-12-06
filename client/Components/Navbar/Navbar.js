import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <Menu size="large">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={(e, { name }) => setActiveItem(name)}
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="sign up"
          active={activeItem === "sign up"}
          onClick={(e, { name }) => setActiveItem(name)}
        >
          Sign Up
        </Menu.Item>
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={(e, { name }) => setActiveItem(name)}
        >
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
