/**
 * Created by Andriy on 08.10.2016.
 */
const initialState = {
    users: {},
    restaurant: {},
    allUsers: {}
};
const users = (state=initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_POSTS':
            return {
                ...state,
                users: action.users,
                restaurant: action.restaurant,
                allUsers: action.users,
            }
        case 'SEARCH_USERS':
            var result = _.mapValues(state.allUsers, function(value) {
                return _.filter(value, function(user){
                    return _.includes(_.upperCase(user.fname), _.upperCase(action.key))
                });
            });

            _.pickBy(result, function(o, key){
                if(!o.length) {
                    delete result[key];
                }
            });
            return {
                ...state,
                users: result
            }
        default:
            return state
    }
}

export default users;