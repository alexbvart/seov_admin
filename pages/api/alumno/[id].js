import { getById, deleteAlumno, updateAlumno } from '../../../utils/controller/alumnoController'

export default (req, res) => {
    const {method} = req;

    switch (method) {
        case 'GET':
            res = getById(req, res);
            break;
        case 'PUT':
            res = updateAlumno(req, res);
            break;
        case 'DELETE':
            res = deleteAlumno(req, res);
            break;
        default:
            res.status(400).json({res : 'method invalid'});
            break;
    }
};