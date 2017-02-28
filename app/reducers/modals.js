/**
 * Created by Andriy on 10.10.2016.
 */

const initialState = {
    modalVisible: false,
    user: {},
    confirmedUser: false
};
const modals = (state=initialState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                ...state,
                modalVisible: action.modalVisible,
                user: action.user
            }
        case 'CONFIRM_USER':
            return {
                ...state,
                confirmedUser: action.confirmedUser
            }
        default:
            return state
    }
}

export default modals;