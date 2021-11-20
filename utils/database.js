/** @format */

import { Pool } from "pg";

export const conn =  new Pool({
	user: "postgres",
	password: "hackuser07",
	host: "localhost",
	port: 5432,
	database: "seov",
});


