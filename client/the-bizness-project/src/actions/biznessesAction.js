import * as api from '../api';

// action creators
export const getBiznesses = () => async(dispatch) => {
    try {
        const {data} = await api.fetchBiznesses();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error)
    }
}