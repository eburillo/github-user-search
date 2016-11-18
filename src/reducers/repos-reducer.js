import ActionTypes from '../actions/action-types.js'
import ErrorMessages from '../messages/errors.js';

const initialState = {
	repos: {
		message: "",
		list: []
	}
}

const reposReducer = function(state = initialState, action) {
	if (typeof action === 'undefined') {
		return initialState;
	}
	switch (action.type) {
		case ActionTypes.GET_REPOS_SUCCESS:
			return {
				repos: {
					message: "",
					list: action.repos
				}
			};
		case ActionTypes.GET_NO_REPOS:
			return {
				repos: {
					message: ErrorMessages.GET_NO_REPOS,
					list: []
				}
			};
		case ActionTypes.GET_REPOS_FAILED:
				return {
					repos: {
						message: ErrorMessages.GET_REPOS_FAILED,
						list: []
					}
				};
		default:
			return state;
	}
}

export default reposReducer;
