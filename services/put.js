import axios from 'axios';

const put = async ({src,id,put}) => {

    const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST
    const response = await axios.put(`${API_URL}/${src}/${id}`, put)    
    return response

}
export default put;
/* PUT requiere enviar una representación completa del recurso que se está modificando */