import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/';

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
