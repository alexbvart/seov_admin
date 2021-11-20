
export default (req, res) => {

    const {method} = req

    switch (method) {
        case 'GET':
            res.status(200).json({res : 'method GET'})
            break;
        case 'POST':
            res.status(200).json({res : 'method POST'})
            break;
        case 'PUT':
            res.status(200).json({res : 'method PUT'})
            break;
        case 'DELETE':
            res.status(200).json({res : 'method DELETE'})
            break;
        default:
            res.status(400).json({res : 'method invalid'})
            break;
    }
}