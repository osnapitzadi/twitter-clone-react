import React from 'react';
import {Container, Navbar} from 'react-bootstrap'

function Header() {
    return (
        <Container>
            <Navbar
                className='m-3'>
                <Navbar.Brand>Chat-36</Navbar.Brand>
            </Navbar>
        </Container>
    );
  }
  
  export default Header;