// eslint-disable-next-line import/no-anonymous-default-export
export default (biznesses=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return biznesses;
        default:
            return biznesses;
    }
}