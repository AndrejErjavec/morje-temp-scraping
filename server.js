import express from "express";
import { getTemp } from "./scraper.js";

const app = express();

const PORT = process.env.PORT || 7878;

app.get("/temperature", getTemp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("server started");
});
