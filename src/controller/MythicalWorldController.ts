import { MythicalWorldModel } from "../model/MythicalWorldModel";
import { RequestHandler } from "express";

const MWModel = new MythicalWorldModel();

export class MythicalWorldController {
	index: RequestHandler = async (req, res) => {
		const result = await MWModel.index();
		return res.json(result);
	};

	show: RequestHandler = async (req, res) => {
		const id = req.params.id;
		// console.log(req.params.id);
		const result = await MWModel.show(id);
		return res.json(result);
	};

	create: RequestHandler = async (req, res) => {
		const result = await MWModel.create(req.body);
		return res.json(result);
	};

	delete: RequestHandler = async (req, res) => {
		const result = await MWModel.delete(req.body);
		return res.json(result);
	};
}
