import mongoose from "mongoose";

const musicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    place: {
      type: Number,
      required: true,
    },
    wins: {
      type: Number,
      required: true,
    },
    games: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    rank_id: {
      type: String,
      required: true,
    },
    rank_name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    season_games: {
      type: Number,
      required: true,
    },
    season_wins: {
      type: Number,
      required: true,
    },
    season_points: {
      type: Number,
      required: true,
    },
    isChampion: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "music" }
);

const Music = mongoose.model("Music", musicSchema);

export default Music;
