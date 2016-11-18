import React from 'react';
import actionTypes from '../actions/action-types.js';
import errorMessages from '../messages/errors.js';
import reposReducer from '../reducers/repos-reducer.js';

describe('Testing Reducers', function() {
  describe('Repositories', function() {

	   describe('default', function() {
  		it('returns the initial state', function() {
  			expect(reposReducer()).toEqual({
          repos: {
            message: "",
            list: []
          }
        });
  		});
  	});

  	describe('on GET_REPOS_SUCCESS action', function() {
  		var state, newState, response;

  		beforeEach(function() {
  			state = {
          repos: {
            message: "",
            list: []
          }
  			}
        newState = {
          repos: {
            message: "",
            list: [
              {
                "name": "atomic-design",
                "description": "The repository for the Atomic Design book",
                "html_url": "https://github.com/bradfrost/atomic-design"
              }
            ]
          }
  			}
        response = {
            repos: [
              {
                "name": "atomic-design",
                "description": "The repository for the Atomic Design book",
                "html_url": "https://github.com/bradfrost/atomic-design"
              }
            ]
        }
  		});

  		it('returns the state with the new repos founded', function() {
  			expect(reposReducer(state, {type: actionTypes.GET_REPOS_SUCCESS, repos: response.repos})).toEqual(newState)
  		});

	   });

     describe('on GET_NO_REPOS action', function() {
   		var state, newState, response;

   		beforeEach(function() {
   			state = {
           repos: {
             message: "",
             list: []
           }
   			}
        newState = {
           repos: {
             message: "No repositories for this user.",
             list: []
           }
   			}
   		});

   		it('returns the state when no repos where founded', function() {
   			expect(reposReducer(state, {type: actionTypes.GET_NO_REPOS})).toEqual(newState)
   		});

 	   });

     describe('on GET_NO_REPOS action', function() {
   		var state, newState, response;

   		beforeEach(function() {
   			state = {
           repos: {
             message: "",
             list: []
           }
   			}
        newState = {
           repos: {
             message: "No user found.",
             list: []
           }
   			}
   		});

   		it('returns the state when no user found', function() {
   			expect(reposReducer(state, {type: actionTypes.GET_REPOS_FAILED})).toEqual(newState)
   		});
 	   });

	});
});
