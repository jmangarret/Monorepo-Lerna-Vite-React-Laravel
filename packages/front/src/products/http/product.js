import axios from 'axios';

export async function getProducts() {
    try {
        const urlApi = 'http://localhost:8000/api/products'
        const response = await axios.get(urlApi);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}