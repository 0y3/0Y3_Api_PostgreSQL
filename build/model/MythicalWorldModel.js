"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MythicalWorldModel = void 0;
/* eslint-disable @typescript-eslint/restrict-template-expressions */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const database_1 = __importDefault(require("../database"));
class MythicalWorldModel {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "select * from mythical_worlds";
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (e) {
                throw new Error(`Error in db mythical_worlds ${e}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM mythical_worlds WHERE id=$1";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                console.log(result.rows[0]);
                return result.rows[0];
            }
            catch (e) {
                throw new Error(`Could not find book ${id}. Error: ${e}`);
            }
        });
    }
    create(p) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "INSERT INTO mythical_worlds (name, type, weight) VALUES($1, $2, $3) RETURNING *";
                const result = yield conn.query(sql, [p.name, p.type, p.weight]);
                const data = result.rows[0];
                conn.release();
                return data;
            }
            catch (e) {
                throw new Error(`Could not add new book ${p.weight}. Error: ${e}`);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "DELETE FROM mythical_worlds WHERE id=($1)";
                const result = yield conn.query(sql, [id]);
                const data = result.rows[0];
                conn.release();
                return data;
            }
            catch (e) {
                throw new Error(`Could not add new book ${id}. Error: ${e}`);
            }
        });
    }
}
exports.MythicalWorldModel = MythicalWorldModel;
