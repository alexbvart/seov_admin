import { getAll, createCarrera} from '../../../utils/controller/carreraController'


export default (req, res) => {

    const {method} = req

    switch (method) {
        case 'GET':
            res = getAll(req, res);
            break;
        case 'POST':
            res = createCarrera(req, res);
            break;
        default:
            res.status(400).json({res : 'method invalid'})
            break;
    }
}