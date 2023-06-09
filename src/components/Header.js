import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button} from "react-bootstrap";


export default class Header extends Component {
  render(){
    return (
      <>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark"> 
      <Container>
      <Navbar.Brand href="/"> React Site </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/> 
      <Navbar.Collapse id="responsive-navbar-nav"> <Nav claccName="me-auto">
        <Nav.Link href="/Home"> Home </Nav.Link> <Nav.Link href="/about"> About us </Nav.Link> 
        <Nav.Link href="/contacts"> Contacts </Nav.Link> 
        <Nav.Link href="/blogs"> Blog </Nav.Link> </Nav>
       <Form className="d-flex"> <FormControl type ="text" placeholder="Search" className="me-sm-3" />
       <Button variant="outline-info">Search</Button> </Form> </Navbar.Collapse> </Container> </Navbar> 
       </> 
    ); 
  } 
}
