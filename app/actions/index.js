/**
 * Created by Andriy on 08.10.2016.
 */

import {Actions} from 'react-native-router-flux';
import fetch from 'isomorphic-fetch';
import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true
});

var feedbacks = [];

function receiveUsers(users, restaurant) {
    return {
        type: 'RECEIVE_POSTS',
        users,
        restaurant
    }
}

export function searchUsers(key) {
    return {
        type: 'SEARCH_USERS',
        key
    }
}

export function showModal(modalVisible, user) {
    return {
        type: 'SHOW_MODAL',
        modalVisible,
        user
    }
}

export function confirmUser(confirmedUser) {
    return {
        type: 'CONFIRM_USER',
        confirmedUser
    }
}

export function selectRadio(value, valueIndex) {
    return {
        type: 'SELECT_RADIO',
        value,
        valueIndex
    }
}

export function resetRadio(value, valueIndex) {
    return {
        type: 'RESET_RADIO',
        value,
        valueIndex
    }
}

export function rateSlider(value) {
    return {
        type: 'RATE_SLIDER',
        value
    }
}

export function resetSlider() {
    return {
        type: 'RESET_SLIDER',
    }
}

export function rateStars(value) {
    return {
        type: 'RATE_STARS',
        value
    }
}

export function resetStars() {
    return {
        type: 'RESET_STARS',
    }
}

export function fetchUsers(restaurantId, online) {

    return function (dispatch) {
        if (!online) {
            return storage.load({
                key: restaurantId,
            }).then(res => {
                dispatch(receiveUsers(res.users || {}, res.restaurant));
                dispatch(Actions.userList);
            }).catch(err => {
                dispatch(showWarning('You need to connect to wi-fi to continue'));
            });
        }

        return fetch(`https://buzzer-1319.nodechef.com/parse/classes/Outlets?where={"outletID":"${restaurantId}"}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': '9lFGxxb4GvU8dE0WVAOA9gD3MqEu5WHGv3aLitFX'
            }
        })
            .then(response => response.json())
            .then(json => {
                    //let users = json.results[0].servers;
                    let restaurant = {
                        objectID: json.results[0].objectId,
                        name: json.results[0].name,
                        outletID: json.results[0].outletID,
                        reward: json.results[0].reward
                    }

                    dispatch(fetchStaff(restaurant));
                }
            ).catch(() => {
                dispatch(showWarning('Can\'t find a restaurant with this ID'));
            })
    }
}

function fetchStaff(restaurant) {

    return function (dispatch) {
        return fetch(`https://buzzer-1319.nodechef.com/parse/classes/Staff?where={"outletID":
        {  "__type": "Pointer",  "className": "Outlets",  "objectId": "${restaurant.objectID}" }}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': '9lFGxxb4GvU8dE0WVAOA9gD3MqEu5WHGv3aLitFX'
            }
        })
            .then(response => response.json())
            .then(json => {
                let staffs = json.results;
                let activeStaffs = _.filter(staffs, function (o, i) {
                    return o.active;
                });
                let usersMap = _.groupBy(activeStaffs, function (n) {
                    return n.fname.toUpperCase().charAt(0);
                });

                let sortedUsersMap = {};

                Object.keys(usersMap).sort().forEach(function (key) {
                    sortedUsersMap[key] = _.sortBy(usersMap[key], 'fname');
                });

                dispatch(receiveUsers(sortedUsersMap, restaurant));
                dispatch(Actions.userList);

                storage.save({
                    key: restaurant.outletID,
                    rawData: {
                        users: sortedUsersMap,
                        restaurant: restaurant
                    }
                });
            })
    }
}

function receiveQuestions(questions) {
    return {
        type: 'RECEIVE_QUESTIONS',
        questions
    }
}

export function askQuestion(question) {
    return {
        type: 'ASK_QUESTION',
        question
    }
}

export function answQuestion(answer) {
    return {
        type: 'ANSWER_QUESTION',
        answer
    }
}

export function previewQuest() {
    return {
        type: 'TO_PREVIEW_QUESTION'
    }
}

export function toPreviewQuest() {
    return function (dispatch) {
        dispatch(resetRadio());
        dispatch(resetSlider());
        dispatch(resetStars());
        dispatch(resetComment());
        dispatch(previewQuest());
    }
}

export function setComment(value) {
    return {
        type: 'SET_COMMENT',
        value
    }
}

export function resetComment(value) {
    return {
        type: 'RESET_COMMENT',
        value
    }
}

export function resetApp() {
    return {
        type: 'RESET_APP'
    }
}

export function showWarning(message) {
    return {
        type: 'SHOW_WARNING',
        message
    }
}

export function setGuid() {
    return {
        type: 'SET_GUID'
    }
}

export function fetchQuestions(restaurantId, online) {
    return function (dispatch) {
        feedbacks = [];
        if (!online) {
            return storage.load({
                key: restaurantId + 'Questions',
            }).then(res => {
                var copyQuestions = _.map(res.questions, _.clone);
                dispatch(receiveQuestions(copyQuestions));
                dispatch(askQuestion(copyQuestions[0]));
                dispatch(Actions.chat);
            }).catch(err => {
                dispatch(showWarning('You need switch to online mode'));
            });
        }

        return fetch(`https://buzzer-1319.nodechef.com/parse/classes/Questions?where={"outletID":"${restaurantId}"}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': '9lFGxxb4GvU8dE0WVAOA9gD3MqEu5WHGv3aLitFX'
            }
        })
            .then(response => response.json())
            .then(json => {
                    let resQuestions = json.results;
                    if (!resQuestions.length) {
                        return;
                    }

                    var activeQestions = _.filter(resQuestions, function (o, i) {
                        delete o.index;
                        return o.active && o.type != 'server' && o.question.toLowerCase().indexOf("who served you") == -1;
                        //return o.active;
                    });

                    activeQestions.push(
                        {
                            question: 'Thanks. All done!',
                            type: 'last'
                        }
                    );

                    var questions = _.map(activeQestions, function (o, i) {
                        o.id = i;
                        return o;
                    })

                    storage.save({
                        key: restaurantId + 'Questions',
                        rawData: {
                            questions: questions
                        }
                    });

                    dispatch(receiveQuestions(questions));
                    dispatch(askQuestion(questions[0]));
                    dispatch(Actions.chat);
                }
            )
    }
}

function makeQuestionID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export function sendFedbacks(answer, online) {
    return function (dispatch) {
        var firstLetterLName = answer.staff.lname ? answer.staff.lname.charAt(0) : "";
        var body = {
            questionID: makeQuestionID(),
            question: "Who served you?",
            outletID: answer.outletID,
            tResponse: answer.staff.fname + " " + firstLetterLName,
            nResponse: 0,
            type: "server",
            user: {
                __type: "Pointer",
                className: "_User",
                objectId: "tablet"
            },
            formID: answer.formId
        };

        feedbacks.push(body);

        if (!online) {
            var answers;
            storage.load({
                key: 'answers',
            }).then(res => {
                answers = res.answers;
            }).catch(() => {
                answers = [];
            }).finally(()=> {
                var newAnswers = answers.concat(feedbacks);
                storage.save({
                    key: 'answers',
                    rawData: {answers: newAnswers}
                });
            });

            dispatch(Actions.thanksFeedback);
            return;
        }

        _.forEach(feedbacks, function (o) {
            return fetch(`https://buzzer-1319.nodechef.com/parse/classes/Feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Parse-Application-Id': '9lFGxxb4GvU8dE0WVAOA9gD3MqEu5WHGv3aLitFX'
                },
                body: JSON.stringify(o)
            })
        });

        feedbacks = [];

        dispatch(Actions.thanksFeedback);
    }
}

function toDoAnswerCollection(answers, item) {
    var answerExist = false;

    _.forEach(answers, function (o) {
        if (o.questionID == item.questionID) {
            answerExist = true;
            o.tResponse = item.tResponse;
            o.nResponse = item.nResponse;
        }
    });

    if (!answerExist) {
        feedbacks.push(item);
    }
}

export function postFeedback(question, answer, nextQuestion, online) {
    return function (dispatch) {
        var body = {
            questionID: question.objectId,
            question: question.question,
            outletID: question.outletID,
            tResponse: answer.value,
            nResponse: answer.nResponse,
            type: question.type,
            user: {
                __type: "Pointer",
                className: "_User",
                objectId: "tablet"
            },
            formID: answer.formId
        };

        toDoAnswerCollection(feedbacks, body);

        dispatch(answQuestion(answer));
        dispatch(showWarning(''));
        if (nextQuestion) {
            dispatch(askQuestion(nextQuestion));
            dispatch(resetRadio());
            dispatch(resetSlider());
            dispatch(resetStars());
            dispatch(resetComment());
        }

    }
}

export function setMode(online) {
    return {
        type: 'SET_CONNECTION',
        online
    }
}

var feedbackInProgress = false;

export function sendFeedbackFromCache(online) {
    return function (dispatch) {
        if (!online || feedbackInProgress) {
            return
        }
        feedbackInProgress = true;
        storage.load({
            key: 'answers',
        }).then(res => {
            storage.remove({
                key: 'answers'
            });
            _.forEach(res.answers, function (o) {
                return fetch(`https://buzzer-1319.nodechef.com/parse/classes/Feedback`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Parse-Application-Id': '9lFGxxb4GvU8dE0WVAOA9gD3MqEu5WHGv3aLitFX'
                    },
                    body: JSON.stringify(o)
                })
            })
            feedbackInProgress = false;

        }).catch(() => {
            feedbackInProgress = false;
        })
    }
}
