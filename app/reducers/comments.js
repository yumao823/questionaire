/**
 * Created by Andriy on 13.10.2016.
 */

const initialState = {
    value: ''
};
const comment = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            return {
                ...state,
                value: action.value,
            }
        case 'RESET_COMMENT':
            return {
                ...state,
                value: '',
            }

        default:
            return state
    }
}

export default comment;