import axios from 'axios';

const API = axios.create({baseURL: 'https://the-bizness-project.herokuapp.com/'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const fetchBiznesses = () => API.get('/biznesses');
export const createBizness = (newBizness) => API.post('/biznesses', newBizness)
export const updateBizness = (id, updatedBizness) => API.patch(`/biznesses/${id}`, updatedBizness)
export const deleteBizness = (id) => API.delete(`/biznesses/${id}`)

export const signIn = (formData) => API.post('users/signin', formData);
export const signUp = (formData) => API.post('users/signup', formData);
