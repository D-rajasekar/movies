import { Sequelize } from "sequelize";
import "dotenv/config";

console.log(process.env.SQL_URL);
export const sequelize = new Sequelize(process.env.SQL_URL);
