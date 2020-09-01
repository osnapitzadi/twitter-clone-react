import React from 'react';
import {Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap'

function Header () {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Twitter Clone</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#LogIn">Log in</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
}

export default Header;