/**
 * Created by Andriy on 21.10.2016.
 */

const initialState = {
    online: false,
};
const connection = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_CONNECTION':
            return {
                ...state,
                online: action.online,
            }

        default:
            return state
    }
}

export default connection;