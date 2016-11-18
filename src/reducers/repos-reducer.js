import ActionTypes from '../actions/action-types.js'

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
					message: "No repositories for this user.",
					list: []
				}
			};
		case ActionTypes.GET_REPOS_FAILED:
				return {
					repos: {
						message: "No user found.",
						list: []
					}
				};
		default:
			return state;
	}
}

export default reposReducer;
