import express from 'express';
import Music from '../models/music.model.js';

const MusicRouter = express.Router();

MusicRouter.get("/", async (req, res) => {
    try {
        const teams = await Music.find({});
        res.status(200).json(teams);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
});

export default MusicRouter;