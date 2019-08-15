export const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CAR':
            return {
                ...state
            }
        default:
            return state;
    }
};