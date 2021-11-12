
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const serviceGet = async (id) => {
    const res = await axios.get(`${BASE_URL}/race/${id}`);
    return res.data

}

export const servicePost = async (content,url) => {
    console.log(content);
    const res = await axios.post(`${BASE_URL}/${url}`, content);
    return res.data

}

