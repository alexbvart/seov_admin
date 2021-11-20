import { all, findById, create, remove, update } from '../repository/alumnoRepository'

export const getAll = (req, res) => {
    all()
        .then(result => {
            if (result.length > 0) {
                res.status(200).json({
                    message: 'OK',
                    response: result
                })
            }
            else {
                res.status(404).json({
                    message: 'No hay resultados'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error al obtener los datos',
                err
            })
        })
}

export const getById = (req, res) => {
    const { id } = req.query;
    const values = [id];
    findById(values)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'OK',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No se encontró el registro'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error al obtener los datos',
                err
            })
        })
}

export const createAlumno = (req, res) => {

    const { body } = req;

    create(body)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'Registro creado',
                    response: result
                })
            } else {
                res.status(500).json({
                    message: 'Error al crear el registro'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error al obtener los datos',
                err
            })
        })

}

export const deleteAlumno = (req, res) => {
    const { id } = req.query;
    const values = [id];
    remove(values)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'Registro eliminado',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No se encontró el registro'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error al obtener los datos',
                err
            })
        })
}

export const updateAlumno = (req, res) => {
    const { id } = req.query;
    const { body } = req;
    update(id, body)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'Registro actualizado',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No se encontró el registro'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error al obtener los datos',
                err
            })
        })
}