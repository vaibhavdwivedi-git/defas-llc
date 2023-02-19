// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import data from "@/database/upcoming.json";

export default async function handler(req, res) {
  const url = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming";

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

  const series_array = data["typeMatches"][0]["seriesMatches"];

  const match_array = [];

  for (var i = 0; i < series_array.length; i++) {
    if (i !== 1) {
      const Match = {};

      Match["id"] =
        series_array[i]["seriesAdWrapper"]["matches"][0]["matchInfo"][
          "matchId"
        ];
      Match["format"] =
        series_array[i]["seriesAdWrapper"]["matches"][0]["matchInfo"][
          "matchFormat"
        ];
      Match["startDate"] =
        series_array[i]["seriesAdWrapper"]["matches"][0]["matchInfo"][
          "startDate"
        ];
      Match["team1"] =
        series_array[i]["seriesAdWrapper"]["matches"][0]["matchInfo"]["team1"][
          "teamSName"
        ];
      Match["team2"] =
        series_array[i]["seriesAdWrapper"]["matches"][0]["matchInfo"]["team2"][
          "teamSName"
        ];
      Match["team1Id"] =
        series_array[i]["seriesAdWrapper"]["matches"][0]["matchInfo"]["team1"][
          "teamId"
        ];
      Match["team2Id"] =
        series_array[i]["seriesAdWrapper"]["matches"][0]["matchInfo"]["team2"][
          "teamId"
        ];

      match_array.push(Match);
    }
  }

  console.log(match_array);

  res.status(200).json(match_array);
}
