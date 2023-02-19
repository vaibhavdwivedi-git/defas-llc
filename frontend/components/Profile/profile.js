import styles from "./profile.module.css";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.icon} src="./logo.png" />
        <h2 className={styles.name}>Vestrap.eth</h2>
        <div className={styles.infoGrid}>
          <div className={styles.info}>
            <p className={styles.heading}>Contest</p>
            <p className={styles.bodyText}>05</p>
          </div>

          <div className={styles.info}>
            <p className={styles.heading}>Money Staked</p>
            <p className={styles.bodyText}>$ 105</p>
          </div>

          <div className={styles.info}>
            <p className={styles.heading}>Money Won</p>
            <p className={styles.bodyText}>$ 150</p>
          </div>

          <div className={styles.info}>
            <p className={styles.heading}>Wallet Balance</p>
            <p className={styles.bodyText}>$ 250</p>
          </div>
        </div>

        <div className={styles.box}>
          <p className={styles.heading}>Average Match Points</p>
          <p className={styles.bodyText}>50</p>
        </div>

        <Link href="./wallet">
          <button className={styles.button}>See Your Wallet</button>
        </Link>
      </div>
    </>
  );
}
