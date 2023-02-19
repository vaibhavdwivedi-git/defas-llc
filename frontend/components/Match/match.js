import styles from "./match.module.css";
import timeleft from "@/library/time";

import { useEffect, useState } from "react";

export default function Match({ format, startDate, team1, team2, onclick }) {
  const [counter, setCounter] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(timeleft(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.label}>Upcoming</div>
      <img className={styles.logo} src="./logo.png" />
      <div className={styles.info}>{format} Match</div>
      <h3 className={styles.title}>
        {team1} Vs {team2}
      </h3>

      <div className={styles.container}>
        <p className={styles.bodyText2}>Time Left</p>
        <p className={styles.bodyText1}>{counter}</p>
      </div>

      <button className={styles.button} onClick={onclick}>
        Make Contest
      </button>
    </div>
  );
}
