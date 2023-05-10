import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About us </Nav.Link>
                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/blogs"> Blogs </Nav.Link>
              </Nav>
              <Form className="d-flex ms-auto">
                <Button variant="outline-info">Search</Button>
                <Button className="ms-2">Login</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ height: "60px" }}></div>
      </>
    );
  }
}
