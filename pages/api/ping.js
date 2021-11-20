/** @format */

import {conn} from '../../utils/database';

export default async (req, res) => {
	const response = await conn.query('SELECT NOW()');
	return res.status(200).json({ message: "pong", res: response.rows[0].now });
};
