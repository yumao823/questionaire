/**
 * Created by Andriy on 11.10.2016.
 */

const initialState = {
    value: 0,
};
const stars = (state=initialState, action) => {
    switch (action.type) {
        case 'RATE_STARS':
            return {
                ...state,
                value: action.value,
            }
        case 'RESET_STARS':
            return {
                value: 0
            }

        default:
            return state
    }
}

export default stars;