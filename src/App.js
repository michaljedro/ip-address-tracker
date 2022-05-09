import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import styles from './components/Global.module.css';

function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Map />
    </div>
  );
}

export default App;
