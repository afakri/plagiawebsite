import React from "react";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <>
      
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand href="https://github.com/afakri/plagiawebsite" >
          Plagia detector
          
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default NavBar;
