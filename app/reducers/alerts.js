/**
 * Created by Andriy on 20.10.2016.
 */

const initialState = {
    message: ''
};
const alert = (state=initialState, action) => {
    switch (action.type) {
        case 'SHOW_WARNING':
            return {
                ...state,
                message: action.message,
            }

        default:
            return state
    }
}

export default alert;