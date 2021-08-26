import React from "react";

function Lists(props) {
  console.log(props.data);
  const listItem = props.data.hits.map((list) => {
    return (
      <div key={list.objectID}>
        <h2>Title: {list.title}</h2>
        <h4>Author: {list.author}</h4>
      </div>
    );
  });
  return <div>{listItem}</div>;
}

export default Lists;
