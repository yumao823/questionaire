/**
 * Created by Andriy on 11.10.2016.
 */

const initialState = {
    value: 0,
};
const slider = (state=initialState, action) => {
    switch (action.type) {
        case 'RATE_SLIDER':
            return {
                ...state,
                value: action.value,
            }
        case 'RESET_SLIDER':
            return {
                ...state,
                value: 0
            }

        default:
            return state
    }
}

export default slider;