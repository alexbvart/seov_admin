import {conn} from '../database'


export const all = async () => {
    const sql = "SELECT * FROM seccion";
    const result = await conn.query(sql);
    return result.rows;
}

export const findById = async (id) => {
    const sql = "SELECT * FROM seccion WHERE id = $1";
    const result = await conn.query(sql, [id]);
    return result.rows[0];
}

export const create = async (data) => {
    const {id, nombre, tutor_id} = data;
    const sql = "INSERT INTO seccion (id, nombre, tutor_id) VALUES ($1, $2, $3) RETURNING *";
    const result = await conn.query(sql, [id, nombre, tutor_id]);
    return result.rows[0];
}

export const update = async (id, data) => {
    const {nombre, tutor_id} = data;
    const sql = "UPDATE seccion SET nombre = $1, tutor_id = $2 WHERE id = $3 RETURNING *";
    const result = await conn.query(sql, [nombre, tutor_id, id]);
    return result.rows[0];
}

export const remove = async (id) => {
    const sql = "DELETE FROM seccion WHERE id = $1 RETURNING *";
    const result = await conn.query(sql, [id]);
    return result.rows[0];
}


