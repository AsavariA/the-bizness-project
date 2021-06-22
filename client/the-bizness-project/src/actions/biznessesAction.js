import * as api from '../api';

// action creators
export const getBiznesses = () => async(dispatch) => {
    try {
        const {data} = await api.fetchBiznesses();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createBizness = (bizness) => async(dispatch) => {
    try {
        const {data} = await api.createBizness(bizness);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateBizness = (id, bizness) => async(dispatch) => {
    try {
        const {data} = await api.updateBizness(id, bizness);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBizness = (id) => async (dispatch) => {
    try {
        await api.deleteBizness(id)
        dispatch({type: 'DELETE', payload:id})
    } catch (error) {
        console.log(error)
    }
}