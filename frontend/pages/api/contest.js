import { postContest, getContests } from "@/database/controllers";
import connectMongo from "@/database/connection";

export default async function handler(req, res) {
  await connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );
  const { method } = req;

  switch (method) {
    case "GET":
      getContests(req, res);
      break;
    case "POST":
      postContest(req, res);
      break;
    case "PUT":
      res.status(200).json({ method, name: "PUT Request" });
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE Request" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
