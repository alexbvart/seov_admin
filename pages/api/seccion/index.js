import { createSeccion, getAll } from "utils/controller/seccionController";



export default (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            return getAll(req, res);
        case 'POST':
            return createSeccion(req, res);
        default:
            return res.status(405).send({
                message: 'Method not allowed'
            })
    }
}