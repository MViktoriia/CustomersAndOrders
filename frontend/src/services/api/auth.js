import axios from 'axios';

const BASE_URL = 'https://customers-orders-backend.onrender.com/api/';

export const instance = axios.create({
  baseURL: BASE_URL,
});

// const token = {
//     set(token) {
//         instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//         instance.defaults.headers.common.Authorization = "";
//     }
// };
