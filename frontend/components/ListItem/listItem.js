import styles from "./listItem.module.css";

export default function ListItem({ player, onclick }) {
  var member = JSON.parse(player);
  return (
    <>
      <div className={styles.container}>
        <img className={styles.player} src="../ball.svg" />
        <div className={styles.details}>
          <p className={styles.role}>Player</p>
          <p className={styles.name}>{member.name}</p>
        </div>
        <img
          className={styles.select}
          src="../logo.png"
          playername={member.name}
          playerid={member.id}
          onClick={onclick}
        />
      </div>
    </>
  );
}
