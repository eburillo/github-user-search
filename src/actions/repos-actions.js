import ActionTypes from './action-types.js'

export function getReposSuccess(repos) {
	return {
		type: ActionTypes.GET_REPOS_SUCCESS,
		repos: repos
	}
}

export function getNoRepos() {
	return {
		type: ActionTypes.GET_NO_REPOS
	}
}

export function getReposFailed() {
	return {
		type: ActionTypes.GET_REPOS_FAILED
	}
}
