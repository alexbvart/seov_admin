
import { getById, updateTutor, deleteTutor } from '../../../utils/controller/tutorController'


export default (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            return getById(req, res);
        case 'PUT':
            return updateTutor(req, res);
        case 'DELETE':
            return deleteTutor(req, res);
        default:
            res.status(400).json({ res: 'method invalid' })
            break;
    }
}