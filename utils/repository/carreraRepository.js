import {conn} from '../database'

export const all = async () => {
    const sql = "SELECT * FROM carrera";
    const result = await conn.query(sql);
    return result.rows;
};
export const findById = async (id) => {
    const sql = "SELECT * FROM carrera WHERE id = $1";
    const result = await conn.query(sql, [id]);
    return result.rows[0];
};
export const create = async (data) => {
    const { id, nombre, descripcion} = data;
    const sql = "INSERT INTO carrera (id, nombre, descripcion) VALUES ($1, $2, $3) RETURNING *";
    const result = await conn.query(sql, [id, nombre, descripcion]);
    return result.rows[0];
};

export const update = async (id , data) => {
    const {nombre, descripcion} = data;
    const sql = "UPDATE carrera SET nombre = $1, descripcion = $2 WHERE id = $3 RETURNING *";
    const result = await conn.query(sql, [nombre, descripcion, id]);
    return result.rows[0];
};

export const remove = async (id) => {
    const sql = "DELETE FROM carrera WHERE id = $1 RETURNING *";
    const result = await conn.query(sql, [id]);
    return result.rows[0];
};