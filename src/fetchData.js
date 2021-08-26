import React, { useEffect, useState } from "react";
import History from "./components/history/historyComponent";
import Results from "./components/results/resultsComponent";

const url = "http://hn.algolia.com/api/v1/search";

function FetchData(props) {
  console.log(props);
  //const [param, setParam] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  //   const updateParam = () => {
  //     // console.log(newSearch);
  //     setParam();
  //   };

  useEffect(() => {
    async function searchData() {
      const results = await (!props.newSearch
        ? fetch(url)
        : fetch(`${url}?query=${props.newSearch}`));
      const resultsJSON = await results.json();
      setData(resultsJSON);
      setLoading(false);
    }

    searchData();
  }, [props.newSearch]);

  return (
    <div>
      <Results loading={loading} data={data} newSearch={props.newSearch} />
      <History newSearch={props.newSearch} />
    </div>
  );
}

export default FetchData;
