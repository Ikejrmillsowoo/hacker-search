import React, { useState } from "react";
import "./style.css";
import { Button, Form, Input, Label, Row } from "reactstrap";

function Search(props) {
  const [searchParam, setSearchParam] = useState("");

  const handleChange = (e) => {
    setSearchParam(e.target.value);
    e.preventDefault();
  };

  return (
    <Row>
      <Form onSubmit={(e) => props.onClick(e, searchParam)}>
        <Label htmlFor="searchItem"></Label>
        <Input
          type="text"
          id="searchItem"
          name="searchItem"
          onChange={handleChange}
          className="input mx-auto"
        />
        <Button className="mt-2">Search</Button>
      </Form>
    </Row>
  );
}

export default Search;
