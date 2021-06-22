import axios from 'axios';

const url = 'http://localhost:5000/biznesses';

export const fetchBiznesses = () => axios.get(url);
export const createBizness = (newBizness) => axios.post(url, newBizness)
export const updateBizness = (id, updatedBizness) => axios.patch(`${url}/${id}`, updatedBizness)
export const deleteBizness = (id) => axios.delete(`${url}/${id}`)
