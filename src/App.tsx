import { useState } from "react";
import styles from "./App.module.css";
import NightSwitch from "./NightSwitch";

function App() {
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${styles.app} ${isNightMode ? styles.nightMode : ""}`}>
      <NightSwitch isNightMode={isNightMode} onClick={toggleNightMode} />
    </div>
  );
}

export default App;
