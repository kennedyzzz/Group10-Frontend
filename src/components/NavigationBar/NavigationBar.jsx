import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="nav-brand">ZURI TRENDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="d-flex justify-content-center w-100">
            <Nav className="d-flex justify-content-center">
              <NavDropdown title="CATALOG" id="collapsible-nav-dropdown" className="nav-dropdown">
                <NavDropdown.Item href="/t-shirts">T-SHIRTS</NavDropdown.Item>
                <NavDropdown.Item href="/croptops">CROP-TOPS</NavDropdown.Item>
                <NavDropdown.Item href="/hoodies">HOODIES</NavDropdown.Item>
                <NavDropdown.Item href="/jackets">JACKETS</NavDropdown.Item>
                <NavDropdown.Item href="/crophoodies">CROP-HOODIES</NavDropdown.Item>
                <NavDropdown.Item href="/sweatshirts">SWEAT-SHIRTS</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
              <Nav.Link href="/about">ABOUT US</Nav.Link>
              <Nav.Link href="/wishlist">WISHLIST</Nav.Link>
            </Nav>
          </div>
          <Nav className="ml-auto">
            <Nav.Link href="/login">LOGIN</Nav.Link>
            <Nav.Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> 
              <span className="badge bg-secondary"> 
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;



