import React, { useState } from "react";

function History({ newSearch }) {
  console.log(newSearch);
  const [searchItems, setSearchItems] = useState([]);
  console.log(searchItems);

  const updateItems = () => {
    setSearchItems([...searchItems, newSearch]);
  };

  if (!searchItems || searchItems.length < 1) {
    return <div>No recent searches</div>;
  } else {
    updateItems();
    searchItems.map((item) => {
      console.log(item);
      return (
        <div key={searchItems.indexOf(item)}>
          <h1>Search history</h1>
          <p>{item}</p>
        </div>
      );
    });
  }
}

export default History;
