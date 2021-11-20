import { getAll,createAlumno } from '../../../utils/controller/alumnoController'

export default (req, res) => {

    const {method, body} = req

    switch (method) {
        case 'GET':
            res = getAll(req, res);
            break;
        case 'POST':
            res = createAlumno(req, res);
            break;
        default:
            res.status(400).json({res : 'method invalid'})
            break;
    }
}