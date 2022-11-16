import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import Button from 'react-bootstrap/esm/Button';

function navbar() {
  return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="py-3 navbar p-5">
          <Navbar.Brand href="#home">
            <img
              alt="starbucks logo"
              src="./images/logo/starbucks-logo.png"
              width="55"
              height="55"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features" className="mx-2 text-body">Menu</Nav.Link>
                <Nav.Link href="#pricing" className="mx-2 text-body">Rewards</Nav.Link>
                <Nav.Link href="#pricing" className="mx-2 text-body">Gift Cards</Nav.Link> 
              </Nav>
              <Nav >
                <Nav.Link className="mx-2 text-body" href="#find-store"><i class="bi bi-geo-alt-fill"></i>Find a store</Nav.Link>
                <Button className="mx-2 my-2  rounded-pill text-body bg-white" variant="outline-dark" size="sm">Sign in</Button>
                <Button className="mx-2 my-2 rounded-pill text-white" variant="dark outline-dark" size="sm">Join now</Button>
              </Nav>
            </Navbar.Collapse>
         
        </Navbar>
      );
}

export default navbar

