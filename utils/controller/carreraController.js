import { all, findById, create, remove, update } from '../repository/carreraRepository'

export const getAll = (req, res) => {
    all()
        .then(result => {
            if (result.length > 0) {
                res.status(200).json({
                    message: 'OK',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No hay resultados',
                    response: result
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error al obtener los datos',
                response: err
            })
        })
};

export const getById = (req, res) => {
    const { id } = req.query;
    findById(id)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'OK',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No hay resultados',
                })
            }
        }).catch(err => {
            res.status(500).json({
                message: 'Error al obtener los datos',
                response: err
            })
        })
};

export const createCarrera = (req, res) => {
    const { body } = req;
    create(body).then(result => {
        if(result) {
        res.status(200).json({
            message: 'Registro creado',
            response: result
        })
        } else {
            res.status(404).json({
                message: 'No hay resultados',
            })
        }
    }).catch(err => {
        res.status(500).json({
            message: 'Error al crear el registro',
            response: err
        })
    })
};

export const updateCarrera = (req, res) => {
    const { body } = req;
    const { id } = req.query;
    update(id, body)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'Registro actualizado',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No se encontro el registro'
                })
            }
        }).catch(err => {
            res.status(500).json({
                message: 'Error al actualizar el registro',
                response: err
            })
        })
};

export const deleteCarrera = (req, res) => {
    const { id } = req.query;
    remove(id)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'Registro eliminado',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No se encontro el registro'
                })
            }
        }).catch(err => {
            res.status(500).json({
                message: 'Error al eliminar el registro',
                response: err
            })
        })
};