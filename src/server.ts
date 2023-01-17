import express, { Express } from "express";
import indexroute from "./routes/indexroute";

const app: Express = express();
const port = 2130;

app.use("/", indexroute);

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}/api`);
});
