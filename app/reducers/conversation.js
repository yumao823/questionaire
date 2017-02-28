/**
 * Created by Andriy on 13.10.2016.
 */

const initialState = [

];

const question = (state, action) => {
    switch (action.type) {
        case 'ASK_QUESTION':
            return {
                question: action.question
            };
        case 'ANSWER_QUESTION':
            if (state.question.id !== action.answer.id) {
                return state
            }
            return {
                ...state,
                answer: action.answer

            };

        default:
            return state
    }
}

const conversation = (state=initialState, action) => {
    switch (action.type) {
        case 'ASK_QUESTION':
            return [
                ...state,
                question(undefined, action)
            ];
        case 'ANSWER_QUESTION':
            return state.map(q => question(q, action));
        case 'TO_PREVIEW_QUESTION':
            let newState = [...state];
            newState.pop();
            delete newState[newState.length -1].answer;
            return newState;
        default:
            return state
    }
}

export default conversation;
