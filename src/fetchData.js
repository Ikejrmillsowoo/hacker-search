import React, { useEffect, useState } from "react";
import Results from "./components/results/resultsComponent";

const url = "http://hn.algolia.com/api/v1/search";

function FetchData(props) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();

    async function searchData() {
      const results = await (!props.newSearch
        ? fetch(url, { signal: abortCont.signal })
        : fetch(`${url}?query=${props.newSearch}`, {
            signal: abortCont.signal,
          }));
      const resultsJSON = await results.json();
      setData(resultsJSON);
      setLoading(false);
    }
    searchData();
    return () => {
      abortCont.abort();
    };
  }, [props.newSearch]);

  return (
    <div>
      <Results loading={loading} data={data} newSearch={props.newSearch} />
    </div>
  );
}

export default FetchData;
