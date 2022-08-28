import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchHistory from "./components/SearchHistory";
import SearchResults from "./components/SearchResults";

function App() {
  const [terms, setTerms] = useState([]);
  const [results, setResults] = useState([]);
  const [dataType, setDataType] = useState("films");

  const addTerm = (term) => {
    const uniqueTerms = new Set([term, ...terms]);
    setTerms(Array.from(uniqueTerms));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData(terms[0]);
  }, [terms]);

  const fetchData = async (keyword) => {
    let url = `http://swapi.dev/api/${dataType}`;
    if (keyword) {
      url += `/?search=${keyword}`;
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error(error.statusText);
    const data = await response.json();

    setResults(data.results);
  };

  return (
    <div className={styles.App}>
      <Header title="hard coded" />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <main className={styles.content}>
        <SearchHistory terms={terms} />
        <SearchResults results={results} type={dataType} />
      </main>
    </div>
  );
}

export default App;
