import mongoose from "mongoose";

const classicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    place: {
        type: Number,
        required: true
    },
    wins: {
        type: Number,
        required: true
    },
    games: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    rank_id: {
        type: String,
        required: true
    },
    rank_name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    season_games: {
        type: Number,
        required: true
    },
    season_wins: {
        type: Number,
        required: true
    },
    season_points: {
        type: Number,
        required: true
    },
    isChampion: {
        type: Boolean,
        required: true
    }
});

const Classic = mongoose.model('Classic', classicSchema); // 'classic' is the name of the collection in the database

export default Classic;