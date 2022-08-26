import styles from "./App.module.css";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.App}>
      <Header title="hard coded" />
    </div>
  );
}

export default App;
