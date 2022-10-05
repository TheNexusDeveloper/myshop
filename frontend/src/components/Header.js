import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button,  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container fluid>
          <LinkContainer to='/'>
          <Navbar.Brand>MyShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to='/Shop'><Nav.Link>Shop</Nav.Link></LinkContainer>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <LinkContainer to='/Electronics'><NavDropdown.Item>Electronics</NavDropdown.Item></LinkContainer>
              <LinkContainer to='/Fashion'><NavDropdown.Item>Fashion & Lifestyle</NavDropdown.Item></LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to='/Services'><NavDropdown.Item>Services</NavDropdown.Item></LinkContainer>
              </NavDropdown>
              <LinkContainer to='/VIP'><Nav.Link disabled>VIP</Nav.Link></LinkContainer>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
            <LinkContainer to='/Cart'><Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link></LinkContainer>
            <LinkContainer to='/Login'><Nav.Link><i className="fas fa-user"></i>Login</Nav.Link></LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header