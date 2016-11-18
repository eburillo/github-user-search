import React from 'react';
import * as reposActions from '../actions/repos-actions.js';
import actionTypes from '../actions/action-types.js';

describe('Testing Actions', function() {
  describe('Repositories', function() {
    it('returns an object with the type of GET_REPOS_SUCCESS', function() {
    	expect(reposActions.getReposSuccess()).toEqual({
    		type: actionTypes.GET_REPOS_SUCCESS,
    	});
    });

    it('returns an object with the type of GET_NO_REPOS', function() {
    	expect(reposActions.getNoRepos()).toEqual({
    		type: actionTypes.GET_NO_REPOS,
    	});
    });

    it('returns an object with the type of GET_REPOS_FAILED', function() {
    	expect(reposActions.getReposFailed()).toEqual({
    		type: actionTypes.GET_REPOS_FAILED,
    	});
    });
  });
});
