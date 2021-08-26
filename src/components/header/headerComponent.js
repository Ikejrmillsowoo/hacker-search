import React from "react";
import { Container, Row } from "reactstrap";
import "./style.css";

function Header() {
  return (
    <Container className="header">
      <Row>
        <h1 className="col-6">Hacker Search</h1>
        <ul className="col-6">
          <li className="col-6">
            <a href="">Search</a>
          </li>
          <li className="col-6">
            <a href="">History</a>
          </li>
        </ul>
      </Row>
    </Container>
  );
}

export default Header;
