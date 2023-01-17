import * as express from "express";
import * as imagecontroller from "../../controller/imagecontroller";

const image = express.Router();
image.get("/", imagecontroller.showImage);

// routes.get('/',(req:Request, res:Response) =>{
//     res.send('Main Routes');
// });

export default image;
