import express from "express";
import { watch, edit } from "../controllers/videoContorller";

const videoRouter = express.Router();

videoRouter.get("/edit", watch);
videoRouter.get("/delete", edit);

export default videoRouter;
