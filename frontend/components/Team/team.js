import ListItem from "../ListItem/listItem";
import styles from "./team.module.css";

export default function team({ name, squad, selectPlayer }) {
  var team = JSON.parse(squad);
  return (
    <>
      <div className={styles.team}>
        <p className={styles.teamName}>{name}</p>
        <hr className={styles.line} width="72px" color="#5E5CE3" height="2px" />
        <div className={styles.teamList}>
          {team.map((player, i) => (
            <>
              <ListItem
                player={JSON.stringify(player)}
                key={i}
                onclick={selectPlayer}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
