import axios from 'axios';

const url = 'http://localhost:5000/biznesses';

export const fetchBiznesses = () => axios.get(url);
export const createBizness = (newBizness) => axios.post(url, newBizness)
