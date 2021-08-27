import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, NavItem, Row } from "reactstrap";

import "./style.css";

function Header() {
  return (
    <Container className="header">
      <Row>
        <h1 className="col-6 display-2">Hacker Search</h1>
        <Nav className="col-6">
          <NavItem className="col-6">
            <Link to="/">Search</Link>
          </NavItem>
          <NavItem className="col-6">
            <Link to="/history">History</Link>
          </NavItem>
        </Nav>
      </Row>
    </Container>
  );
}

export default Header;
