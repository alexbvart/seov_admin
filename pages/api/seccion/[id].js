import { deleteSeccion, getById, updateSeccion } from "utils/controller/seccionController"


export default (req, res) => {

    const { method } = req

    switch (method) {
        case 'GET':
            return getById(req, res)
        case 'PUT':
            return updateSeccion(req, res)
        case 'DELETE':
            return deleteSeccion(req, res)
        default:
            res.status(405).send({
                message: 'Method not allowed'
            })
    }
}