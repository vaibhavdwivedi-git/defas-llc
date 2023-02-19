// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { match_id, team_id } = req.query;
  const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${match_id}/team/${team_id}`;

  const options = {
    method: "GET",
    url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
    headers: {
      "X-RapidAPI-Key": "efb7282ce9mshf1060cb6b40e7c6p12b11cjsn929ee3e68380",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  const data = await response.json();

  let squad = data["players"]["Squad"];

  var team = [];

  for (let i = 0; i < squad.length; i++) {
    let player = {};
    player["id"] = squad[i]["id"];
    player["name"] = squad[i]["name"];
    team.push(player);
  }

  res.status(200).json(team);
}
