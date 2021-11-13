import axios from 'axios';

const deleteById = async ({src,id}) => {
    const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST
    const response = await axios.delete(`${API_URL}/${src}/${id}`)    
    return response
}
export default deleteById;