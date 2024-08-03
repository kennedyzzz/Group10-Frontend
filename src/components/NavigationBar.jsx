import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function NavigationBar() {
  return (
    <div className='navbar container-fluid navbar-expand-lg bg-body-tertiary'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="/" className='nav-brand'>ZURI TRENDS</Navbar.Brand>
        <Navbar.Brand href="/" className='nav-brand'>HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="CATALOG" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/t-shirts">T-SHIRTS</NavDropdown.Item>
              <NavDropdown.Item href="/croptops">
                CROP-TOPS
              </NavDropdown.Item>
              <NavDropdown.Item href="/hoodies">HOODIES</NavDropdown.Item>
              <NavDropdown.Item href="/jackets">
                JACKETS
              </NavDropdown.Item>
              <NavDropdown.Item href="/crophoodies">
                CROP-HOODIES
              </NavDropdown.Item>
              <NavDropdown.Item href="/sweatshirts">
                SWEAT-SHIRTS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about">ABOUT US</Nav.Link>
            <Nav.Link eventKey={2} href="/cart">
              CART
            </Nav.Link>
            <Nav.Link eventKey={2} href="/wishlist">
              WISHLIST
            </Nav.Link>
            <Nav.Link href="/logout">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar