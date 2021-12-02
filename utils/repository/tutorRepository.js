import { conn } from '../database'


export const all = async () => {
    const sql = "SELECT * FROM tutor";
    const result = await conn.query(sql);
    return result.rows;
}

export const findById = async (id) => {
    const sql = "SELECT * FROM tutor WHERE id = $1";
    const result = await conn.query(sql, [id]);
    return result.rows[0];
}


export const create = async (data) => {
    const { id, nombre, apellido, user_id } = data
    const sql = "INSERT INTO tutor (id, nombre, apellido, user_id) VALUES ($1, $2, $3, $4) RETURNING *";
    const result = await conn.query(sql, [id, nombre, apellido, user_id]);
    return result.rows[0];
}

export const update = async (id, data) => {
    const { nombre, apellido, user_id } = data
    const sql = "UPDATE tutor SET nombre = $1, apellido = $2, user_id = $3 WHERE id = $4 RETURNING *";
    const result = await conn.query(sql, [nombre, apellido, user_id, id]);
    return result.rows[0];
}

export const remove = async (id) => {
    const sql = "DELETE FROM tutor WHERE id = $1 RETURNING *";
    const result = await conn.query(sql, [id]);
    return result.rows[0];
}

