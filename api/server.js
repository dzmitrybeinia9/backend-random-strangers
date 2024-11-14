import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "../config/db.js";
import MusicRouter from "../routes/music.route.js";

const app = express();

const port = process.env.PORT || 5001;

app.use("/api/music/rating", MusicRouter);

app.listen(port, () => {
  connectDB();
  console.log("Server started at http://localhost:" + port);
});
