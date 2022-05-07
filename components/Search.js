import Link from "next/link";
import React, { useEffect, useState } from "react";
import ItemList from "./items/SmallItemList"

function Search({ search }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchResult = async () => {
      await fetch(
        `http://localhost:8080/sites/LagerApp/Backend/crud/get/search.php?search=${search}`
      )
        .then((res) => res.json())
        .then((res) => setResults(res));
    };
    fetchResult();
  }, [search]);
  return (
    <div className="absolute ">
      {results.length > 0 ? <ItemList data={results}/> : ""}
    </div>
  );
}

export default Search;
