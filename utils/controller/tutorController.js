import { all, create, update, remove, findById } from '../repository/tutorRepository'


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
                    message: 'No se encontraron tutores'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error',
                response: err
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
                    message: 'No se encontro tutor'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error',
                response: err
            })
        })
}

export const createTutor = (req, res) => {
    create(req.body)
        .then(result => {
            res.status(200).json({
                message: 'OK',
                response: result
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error',
                response: err
            })
        })
}


export const updateTutor = (req, res) => {
    update(req.query.id, req.body)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'OK',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No se encontro tutor'
                })
            }

        })
        .catch(err => {
            res.status(500).json({
                message: 'Error',
                response: err
            })
        })
}

export const deleteTutor = (req, res) => {
    remove(req.query.id)
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: 'tutor eliminado',
                    response: result
                })
            } else {
                res.status(404).json({
                    message: 'No se encontro tutor'

                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error',
                response: err
            })
        })
}
