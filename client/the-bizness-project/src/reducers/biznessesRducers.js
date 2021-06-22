// eslint-disable-next-line import/no-anonymous-default-export
export default (biznesses=[], action) => {
    switch (action.type) {
        case 'DELETE':
            return biznesses.filter((bizness) => bizness._id !== action.payload)
        case 'UPDATE':
            return biznesses.map((bizness) => bizness._id === action.payload._id ? action.payload : bizness)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...biznesses, action.payload];
        default:
            return biznesses;
    }
}