import { combineReducers } from 'redux';
import routes from './routes';
import users from './users';
import modals from './modals';
import radios from './radios';
import slider from './slider';
import stars from './stars';
import questions from './questions';
import conversation from './conversation';
import comment from './comments';
import alert from './alerts';
import connection from './connection';
import guid from './guid'

const appReducer = combineReducers({
    routes,
    users,
    modals,
    radios,
    slider,
    stars,
    questions,
    conversation,
    comment,
    alert,
    connection,
    guid
});

export default (state, action) => {
    if (action.type === 'RESET_APP') {
        state.conversation = undefined;
    }

    return appReducer(state, action)
}