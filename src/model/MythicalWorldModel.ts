/* eslint-disable @typescript-eslint/restrict-template-expressions */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import client from "../database";

export interface World {
	id: number;
	name: string;
	type: string;
	weight: number;
}

export class MythicalWorldModel {
	async index(): Promise<World[]> {
		try {
			const conn = await client.connect();
			const sql = "select * from mythical_worlds";
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (e) {
			throw new Error(`Error in db mythical_worlds ${e}`);
		}
	}

	async show(id: string): Promise<World> {
		try {
			const sql = "SELECT * FROM mythical_worlds WHERE id=$1";
			const conn = await client.connect();
			const result = await conn.query(sql, [id]);
			conn.release();
			console.log(result.rows[0]);
			return result.rows[0];
		} catch (e) {
			throw new Error(`Could not find book ${id}. Error: ${e}`);
		}
	}

	async create(p: World): Promise<World> {
		try {
			const conn = await client.connect();
			const sql =
				"INSERT INTO mythical_worlds (name, type, weight) VALUES($1, $2, $3) RETURNING *";
			const result = await conn.query(sql, [p.name, p.type, p.weight]);
			const data = result.rows[0];
			conn.release();
			return data;
		} catch (e) {
			throw new Error(`Could not add new book ${p.weight}. Error: ${e}`);
		}
	}

	async delete(id: string): Promise<World> {
		try {
			const conn = await client.connect();
			const sql = "DELETE FROM mythical_worlds WHERE id=($1)";
			const result = await conn.query(sql, [id]);
			const data = result.rows[0];
			conn.release();
			return data;
		} catch (e) {
			throw new Error(`Could not add new book ${id}. Error: ${e}`);
		}
	}
}
