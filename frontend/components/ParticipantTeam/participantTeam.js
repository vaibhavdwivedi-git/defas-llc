import styles from "./participantTeam.module.css";
import Listing from "../Listing/listing";

export default function ParticipantTeam() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.logo} src="./logo.png" />

        <h2 className={styles.name}>Vestrap.eth</h2>

        <div className={styles.infoGrid}>
          <div className={styles.info}>
            <p className={styles.bodyText}>5</p>
            <p className={styles.head}>Rank</p>
          </div>

          <div className={styles.info}>
            <p className={styles.bodyText}>60</p>
            <p className={styles.head}>Match Points</p>
          </div>
        </div>

        <h3 className={styles.heading}>Picked Team</h3>

        <div className={styles.teamList}>
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
      </div>
    </>
  );
}
