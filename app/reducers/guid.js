/**
 * Created by Andriy on 15.11.2016.
 */

const initialState = {
    value: '',
};

function generateId() {
    return s4() + s4() + '-' + s4() + '-' +
        s4() + s4() + s4() + '-' + new Date().toISOString().slice(0, 19);
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

const guid = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_GUID':
            return {
                ...state,
                value: generateId(),
            }
        default:
            return state
    }
}

export default guid;