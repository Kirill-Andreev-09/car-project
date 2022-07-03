import { Router } from "@reach/router";
import { Header, MainPage } from "../index";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.rootPage}>
      <Header />
      <MainPage />
    </div>
  );
};

export { App };
