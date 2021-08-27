import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.css";

function History({ newSearch }) {
  const items = newSearch.map((item) => {
    return (
      <div key={newSearch.indexOf(item)}>
        <li className="listItem">{item}</li>
      </div>
    );
  });
  return (
    <Container>
      <h2 className="display-3 mt-3 history_header">Search History</h2>
      <Row className="text-center">
        <Col>
          <ol>{items}</ol>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
