/**
 * Created by Andriy on 13.10.2016.
 */

const initialState = {
    questions: []
};

const questions = (state=initialState, action) => {
    function transformOptions(questions) {
        var transformedQuestions = _.forEach(questions, function(question) {
            let options = {
                types: []
            };
            if(question.options) {

                _.forEach(question.options, function(option) {
                    options.types.push({label: option, value: option})
                })
                question.options = options;
            }
        });

        return transformedQuestions;
    }
    switch (action.type) {
        case 'RECEIVE_QUESTIONS':
            return {
                ...state,
                questions: transformOptions(action.questions),
            }
        default:
            return state
    }
}

export default questions;
