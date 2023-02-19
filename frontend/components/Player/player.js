import styles from "./player.module.css";

export default function Player() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.icon} src="../logo.png" />
        <h2 className={styles.name}>Sachin Tendulkar</h2>
        <div className={styles.infoGrid}>
          <div className={styles.info}>
            <p className={styles.heading}>Matches</p>
            <p className={styles.bodyText}>05</p>
          </div>

          <div className={styles.info}>
            <p className={styles.heading}>Runs</p>
            <p className={styles.bodyText}>105</p>
          </div>

          <div className={styles.info}>
            <p className={styles.heading}>Wickets</p>
            <p className={styles.bodyText}>50.37</p>
          </div>

          <div className={styles.info}>
            <p className={styles.heading}>Average</p>
            <p className={styles.bodyText}>50.37</p>
          </div>

          <div className={styles.info}>
            <p className={styles.heading}>Strike Rate</p>
            <p className={styles.bodyText}>50.37</p>
          </div>
        </div>

        <div className={styles.box}>
          <p className={styles.heading}>Average Match Points</p>

          <p className={styles.bodyText}>50</p>
        </div>
      </div>
    </>
  );
}
