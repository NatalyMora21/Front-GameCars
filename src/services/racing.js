
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const serviceGet = async () => {
    const res = await axios.get(`${BASE_URL}/racing`);
    return res.data

}

export const servicePost = async (content) => {
    console.log(content);
    const res = await axios.post(`${BASE_URL}/race`, content);
    return res.data

}

