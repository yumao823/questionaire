/**
 * Created by Andriy on 10.10.2016.
 */

const initialState = {
    radioIndex: 0,
    radioValue: ''
};
const radios = (state=initialState, action) => {
    switch (action.type) {
        case 'SELECT_RADIO':
            return {
                ...state,
                radioValue: action.value,
                radioIndex: action.valueIndex
            }
        case 'RESET_RADIO':
            return {
                ...state,
                radioValue: '',
                radioIndex: 0
            }
        default:
            return state
    }
}

export default radios;