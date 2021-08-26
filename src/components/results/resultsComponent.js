import React from "react";
import Lists from "../lists/listComponent";

function Results(props) {
  if (props.loading || !props.data) {
    return <div>...Loading</div>;
  } else {
    return (
      <div>
        <Lists data={props.data} />
      </div>
    );
  }
}

export default Results;
