import * as express from "express";
import images from "./api/imageroute";
import mythicalWorld from "./api/mythicalWorldroute";

const routes = express.Router();

routes.use("/api/image", images);
routes.use("/api/mythical-world", mythicalWorld);

export default routes;
