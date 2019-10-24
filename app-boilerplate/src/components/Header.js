import React from "react";
import { Navbar } from "react-bootstrap";
import LogoutBtn from "./Auth/LogoutBtn";

const logoutHandler = () => {
  // clear localStorage and refresh page
  window.localStorage.removeItem("hasura-token");
  window.location.href = "/";
};

const Header = () => (
  <Navbar className="justify-content-between">
    <Navbar.Brand>GraphQL Tutorial App</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
      <LogoutBtn logoutHandler={logoutHandler} />
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
