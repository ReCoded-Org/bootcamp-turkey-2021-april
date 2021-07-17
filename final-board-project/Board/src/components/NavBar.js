import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import BoardForm from "./BoardForm";
import Nav from "react-bootstrap/Nav";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { ThemeContext } from "../Context/Theme";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Orders Board</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" exact="true">
            Home
          </Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/completed">Completed</Nav.Link>
        </Nav>
        <BootstrapSwitchButton
          checked={theme.board}
          onlabel="Board"
          offlabel="List"
          onstyle="info"
          offstyle="dark"
          width={75}
          style="mr-2 mb-2 mb-lg-0 border"
          onChange={checked => {
            localStorage.setItem("theme", { board: checked });
            setTheme({ board: checked });
          }}
        />
        <BoardForm />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
