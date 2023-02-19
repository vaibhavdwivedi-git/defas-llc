import Contests from "@/model/contest";

export async function getContests(req, res) {
  try {
    const contests = await Contests.find({});
    console.log("hii");
    if (!contests) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(contests);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

export async function postContest(req, res) {
  try {
    const data = JSON.parse(req.body);
    console.log(typeof data);
    var contest = {
      contest_id: 1,
      match_id: data["id"],
      entryFee: data["entryFee"],
      participants: data["participants"],
      startDate: data["startDate"],
      team1: data["team1"],
      team1Id: data["team1Id"],
      team2: data["team2"],
      squad1: data["squad1"],
      squad2: data["squad2"],
      team2Id: data["team2Id"],
      format: data["format"],
      contestants: data["contestants"],
    };
    console.log(contest);
    await Contests.create(contest, function (err, data) {
      console.log(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
