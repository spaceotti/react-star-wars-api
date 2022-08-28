import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchHistory from "./components/SearchHistory";

function App() {
  const [terms, setTerms] = useState(["new hope", "empire"]);

  const addTerm = (term) => {
    setTerms((prevState) => {
      return [term, ...prevState];
    });
  };

  return (
    <div className={styles.App}>
      <Header title="hard coded" />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <main className={styles.content}>
        <SearchHistory terms={terms} />
      </main>
    </div>
  );
}

export default App;
