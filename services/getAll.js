import axios from 'axios';

const getAll = async ({src}) => {

    const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST
    const getAllData = await axios.get(`${API_URL}/${src}`)

    return getAllData;
}
export default getAll;