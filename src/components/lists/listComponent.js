import React from "react";
import "./style.css";

function Lists(props) {
  const listItem = props.data.hits.map((list) => {
    return (
      <div key={list.objectID}>
        <h4 className="text">
          Title: <span>{list.title}</span>
        </h4>

        <h6 className="text">
          Author: <span>{list.author}</span>
        </h6>
        <a href={list.url} target="_blank">
          Click for more information
        </a>
      </div>
    );
  });
  return <div>{listItem}</div>;
}

export default Lists;
