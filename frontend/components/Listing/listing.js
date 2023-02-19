import styles from "./listing.module.css";

export default function Listing() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.rank}>1</p>
        <p className={styles.name}>Rakesh Chaudhary</p>
        <p className={styles.points}>45 Points</p>
        <img className={styles.select} src="./logo.png" />
      </div>
    </>
  );
}
