import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function HorizontalMenu() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#">MyApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
          <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
          <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">More Services</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default HorizontalMenu;