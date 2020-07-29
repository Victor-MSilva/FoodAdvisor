import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./Navigationbar.css";

const Navigationbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar_nav">
        <Navbar.Brand className="ml-4" id="navBrand" href="/">FoodAdvisor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/u1/recipes">My Recipes</Nav.Link>
            <Nav.Link href="/recipes/new">Add Recipe</Nav.Link>
          </Nav>
          <Nav inline className="mr-3">
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
