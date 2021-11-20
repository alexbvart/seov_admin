import {getById, deleteCarrera, updateCarrera} from '../../../utils/controller/carreraController'

export default(req, res) => {
    const {method} = req

    switch (method) {
        case 'GET':
            res = getById(req, res);
            break;
        case 'PUT':
            res = updateCarrera(req, res);
            break;
        case 'DELETE':
            res = deleteCarrera(req, res);
            break;
        default:
            res.status(400).json({res : 'method invalid'})
            break;
    }
}