import { all, create, findById, remove, update } from '../repository/seccionRepository'


export const getAll = (req, res) => {
    all()
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'OK',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No se encontraron registros'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error interno del servidor',
                error: err
            })
        })
}

export const getById = (req, res) => {
    findById(req.query.id)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'OK',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No se encontraron registros'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error interno del servidor',
                error: err
            })
        })
}

export const createSeccion = (req, res) => {
    create(req.body)
        .then(result => {
            if (result) {
                res.status(201).json({
                    message: 'OK',
                    response: result
                })
            } else {
                res.status(500).json({
                    message: 'Error al crear seccion'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error interno del servidor',
                error: err
            })
        })
}

export const updateSeccion = (req, res) => {
    update(req.query.id, req.body)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'OK',
                    response: result
                })
            } else {
                res.status(500).json({
                    message: 'Error al actualizar seccion'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error interno del servidor',
                error: err
            })
        })
}

export const deleteSeccion = (req, res) => {
    remove(req.query.id)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'OK',
                    response: result
                })
            } else {
                res.status(500).json({
                    message: 'Error al eliminar seccion || no encontro registro'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error interno del servidor',
                error: err
            })
        })
}



