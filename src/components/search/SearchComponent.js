import React, { useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";

function Search(props) {
  //console.log(props);
  const [searchParam, setSearchParam] = useState("");

  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };

  return (
    <div>
      <Form onClick={(e) => props.onClick(e, searchParam)}>
        <Label htmlFor="searchItem"></Label>
        <Input
          type="text"
          id="searchItem"
          name="searchItem"
          onChange={handleChange}
        />
        <Button className="mt-2">Search</Button>
      </Form>
    </div>
  );
}

export default Search;
