import styles from "./create.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Create({ match }) {
  const router = useRouter();

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = () => {
    match["participants"] = formData["participants"];
    match["entryFee"] = formData["entryFee"];
    router.push({
      pathname: `/make_team/`,
      query: match,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.icon} src="./logo.png" />

        <h2 className={styles.name}>
          {match.team1} Vs {match.team2}
        </h2>

        <p className={styles.heading}>Add Details</p>

        <input
          className={styles.input}
          type="text"
          onChange={setFormData}
          id="participants"
          name="participants"
          placeholder="Enter Number of Partcipants"
          autocomplete="off"
        />

        <input
          className={styles.input}
          type="text"
          onChange={setFormData}
          id="entryFee"
          name="entryFee"
          placeholder="Enter Entry Fees Amount"
          autocomplete="off"
        />

        <button className={styles.button} onClick={handleSubmit}>
          Create Contest
        </button>
      </div>
    </>
  );
}
