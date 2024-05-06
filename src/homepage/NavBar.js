import React, { useContext } from "react";
import { Navbar, Container, Nav, Form, NavDropdown, Button } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import img from "../imgs/171322.png";
import CartContext from "../context/cartContext";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavBar = () => {
  const { cartItemsLength } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/home">
          <img src={img} width="50" />
          <span style={{ padding: "10px", fontWeight: "bold", fontFamily: "sans-serif" }}>Ketaby</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "300px" }}>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

      {/* Link to the cart page */}
      <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
        {cartItemsLength > 0 && (
          <b className="cart-notification" style={{ position: "absolute", top: "5px", right: "1px", width: "30px", height: "30px", backgroundColor: "red", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {cartItemsLength}
          </b>
        )}
        <IoCartOutline style={{ fontSize: "50px", margin: "0 10px", cursor: "pointer" }} />
      </Link>
    </Navbar>
  );
};

export default NavBar;