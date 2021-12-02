
import { createTutor, getAll } from '../../../utils/controller/tutorController'

export default (req, res) => {

    const { method } = req

    switch (method) {
        case 'GET':
            return getAll(req, res)
        case 'POST':
            return createTutor(req, res)

        default:
            res.status(400).json({ res: 'method invalid' })
            break;
    }
}