import styles from "./pickedTeam.module.css";
import ListItem from "../ListItem/listItem.js";
import Link from "next/link";

export default function PickedTeam({ team, onsubmit }) {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.logo} src="../logo.png" />

        <Link href="/view_profile">
          <button className={styles.button} onClick={onsubmit}>
            Submit Team
          </button>
        </Link>

        <div className={styles.infoGrid}>
          <div className={styles.info}>
            <p className={styles.head}>Players Picked</p>
            <p className={styles.bodyText}>{team.length}</p>
          </div>

          <div className={styles.info}>
            <p className={styles.head}>Left to Pick</p>
            <p className={styles.bodyText}>{11 - team.length}</p>
          </div>
        </div>

        <h3 className={styles.heading}>Picked Team</h3>

        <div className={styles.teamList}>
          {team.map((player, i) => (
            <>
              <ListItem player={JSON.stringify(player)} key={i} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
