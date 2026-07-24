import "dotenv/config";
import app, { ensureDB } from "../server/index.js";

let dbReady = ensureDB();

export default async function handler(req, res) {
  await dbReady;
  return app(req, res);
}
