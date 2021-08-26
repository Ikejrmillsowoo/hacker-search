import React, { useState } from "react";
import "./style.css";
import FetchData from "../../fetchData";
import Header from "../header/headerComponent";
import History from "../history/historyComponent";
import Search from "../search/SearchComponent";

function Main() {
  const [data, setData] = useState();
  const [newSearch, setNewSearch] = useState();

  const handleClick = (e, searchParam) => {
    e.preventDefault();
    setNewSearch(searchParam);
  };

  const updateData = (e, newData) => {
    console.log(newData);
    setData(newData);
  };
  return (
    <div className="main">
      <Header />
      <Search onClick={handleClick} />
      <FetchData newSearch={newSearch} updateData={updateData} />
    </div>
  );
}

export default Main;
