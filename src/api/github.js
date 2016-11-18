import axios from 'axios';
import store from '../stores/store.js';
import {getReposSuccess, getNoRepos, getReposFailed} from '../actions/repos-actions.js';

export function getRepos(user) {
	axios.get('https://api.github.com/users/' + user + '/repos')
		.then(function(response) {
			if (response.data.length > 0) {
				store.dispatch(getReposSuccess(response.data));
			}
			else {
				store.dispatch(getNoRepos());
			}

		})
		.catch(function (error) {
			store.dispatch(getReposFailed());
		});
}
