import styles from "./game.module.css";
import Link from "next/link";
import timeleft from "@/library/time";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Game(game) {
  const router = useRouter();

  const contest = game.game;
  console.log(contest);

  const [counter, setCounter] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(timeleft(contest.startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    router.push({
      pathname: `/make_team`,
      query: contest,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.label}>Upcoming</div>
      <img className={styles.logo} src="./logo.png" />
      <div className={styles.info}>{contest.format}</div>
      <h3 className={styles.title}>
        {contest.team1} Vs {contest.team2}
      </h3>

      <div className={styles.container}>
        <div className={styles.container2}>
          <img className={styles.star} src="./star.png" />
          <p className={styles.bodyText2}>Current Grand Prize</p>
        </div>
        <p className={styles.bodyText1}>
          $ {parseInt(contest.entryFee) * parseInt(contest.contestants.length)}
        </p>
      </div>

      <div className={styles.details}>
        <div className={styles.detail}>
          <p className={styles.bodyText2}>Participants</p>
          <p className={styles.bodyText1}>
            {contest.contestants.length} / {contest.participants}{" "}
          </p>
        </div>

        <div className={styles.detail}>
          <p className={styles.bodyText2}>Contest Fees</p>
          <p className={styles.bodyText1}>$ {contest.entryFee}</p>
        </div>

        <div className={styles.detail}>
          <p className={styles.bodyText2}>Ends in:</p>
          <p className={styles.bodyText1}>{"--"}</p>
        </div>
      </div>

      <button className={styles.button} onClick={handleSubmit}>
        Join Game
      </button>
    </div>
  );
}
