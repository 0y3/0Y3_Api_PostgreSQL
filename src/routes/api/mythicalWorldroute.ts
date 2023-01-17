import * as express from "express";
import { MythicalWorldController } from "../../controller/MythicalWorldController";

const MWController = new MythicalWorldController();
const mythicalWord = express.Router();

mythicalWord.get("/", MWController.index);
mythicalWord.get("/:id", MWController.show);

// routes.get('/',(req:Request, res:Response) =>{
//     res.send('Main Routes');
// });

export default mythicalWord;
