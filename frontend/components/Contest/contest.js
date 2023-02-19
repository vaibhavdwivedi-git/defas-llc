import styles from "./contest.module.css";

export default function Contest() {
  return (
    <div className={styles.card}>
      <div className={styles.label}>Live</div>
      <img className={styles.logo} src="./logo.png" />
      <div className={styles.info}>21.10.2002</div>
      <h3 className={styles.title}>Ind Vs Pak</h3>

      <div className={styles.container}>
        <p className={styles.bodyText2}>Score</p>
        <p className={styles.bodyText1}>Ind: 24-3 (4.2) </p>
      </div>

      <div className={styles.details}>
        <div className={styles.detail}>
          <p className={styles.bodyText2}>Participants</p>
          <p className={styles.bodyText1}>20</p>
        </div>

        <div className={styles.detail}>
          <p className={styles.bodyText2}>Your Points</p>
          <p className={styles.bodyText1}>150</p>
        </div>

        <div className={styles.detail}>
          <p className={styles.bodyText2}>Current Rank</p>
          <p className={styles.bodyText1}>04</p>
        </div>
      </div>

      <button className={styles.button}>See Details</button>
    </div>
  );
}
