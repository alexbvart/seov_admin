import { getAll, createCarrera} from '../../../utils/controller/carreraController'


export default (req, res) => {

    const {method} = req

    switch (method) {
        case 'GET':
            return getAll(req, res);
        case 'POST':
            return createCarrera(req, res);
        default:
            res.status(400).json({res : 'method invalid'})
            break;
    }
}