import { getAll,createAlumno } from '../../../utils/controller/alumnoController'

export default (req, res) => {

    const {method, body} = req

    switch (method) {
        case 'GET':
            return getAll(req, res);
        case 'POST':
            return createAlumno(req, res);
        default:
            res.status(400).json({res : 'method invalid'})
            break;
    }
}