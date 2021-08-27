import React, { useState } from "react";
import "./style.css";
import FetchData from "../../fetchData";
import History from "../history/historyComponent";
import Search from "../search/SearchComponent";
import { Route } from "react-router";

function Main() {
  const [data, setData] = useState();
  const [newSearch, setNewSearch] = useState();
  const [searchTermHistory, setSearchTermHistory] = useState([]);

  const handleClick = (e, searchParam) => {
    e.preventDefault();
    setNewSearch(searchParam);
    setSearchTermHistory([...searchTermHistory, searchParam]);
  };

  const updateData = (e, newData) => {
    setData(newData);
  };

  return (
    <div className="main">
      <Route exact path="/">
        <Search onClick={handleClick} />
        <FetchData newSearch={newSearch} updateData={updateData} />
      </Route>
      <Route path="/history">
        <History newSearch={searchTermHistory} className="history" />
      </Route>
    </div>
  );
}

export default Main;
