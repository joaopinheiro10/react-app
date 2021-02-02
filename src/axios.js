import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerstore-8f541-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;