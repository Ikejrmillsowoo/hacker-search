import React from "react";

function Lists(props) {
  const listItem = props.data.hits.map((list) => {
    return (
      <div key={list.objectID}>
        <h4>Title: {list.title}</h4>

        <h6>Author: {list.author}</h6>
      </div>
    );
  });
  return <div>{listItem}</div>;
}

export default Lists;
