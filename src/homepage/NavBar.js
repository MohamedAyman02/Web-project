import React, { useContext, useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import img from "../imgs/171322.png";
import CartContext from "../context/cartContext";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavBar = ({ handleSearch }) => {
  const { cartItemsLength } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query

  // Function to handle changes in the search input
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Inside the NavBar component
const handleSearchClick = () => {
  // Check if handleSearch exists before calling it
  if (typeof handleSearch === "function") {
    handleSearch(searchQuery);
  }
};


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/home">
          <img src={img} width="50" alt="Ketaby Logo" />
          <span style={{ padding: "10px", fontWeight: "bold", fontFamily: "sans-serif" }}>Ketaby</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "300px" }}>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/filter">Books</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" value={searchQuery} onChange={handleChange} />
            <Button variant="outline-success" onClick={handleSearchClick}>Search</Button>
          </Form> */}
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
