import { Schema, models, model } from "mongoose";

const contestSchema = new Schema({
  contest_id: String,
  match_id: String,
  entryFee: String,
  participants: String,
  startDate: String,
  format: String,
  team1: String,
  team1Id: String,
  team2: String,
  team2Id: String,
  format: String,
  squad1: [
    {
      id: String,
      name: String,
    },
  ],
  squad2: [
    {
      id: String,
      name: String,
    },
  ],
  contestants: [
    {
      contestant_id: String,
      team: [
        {
          id: String,
          name: String,
        },
      ],
    },
  ],
});

const Contests = models.contest || model("contest", contestSchema);

export default Contests;
