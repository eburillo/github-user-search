import React, { Component } from 'react';
import SearchForm from '../presentational/search-form.js';
import * as githubAPI from '../../api/github.js';

class SearchFormContainer extends Component {

	onFormSubmit(e) {
		e.preventDefault();
		githubAPI.getRepos(this.refs.child.getValue());
	}

	render() {
		return (
			<SearchForm onFormSubmit={this.onFormSubmit.bind(this)} ref="child"></SearchForm>
		);
	}

}

export default SearchFormContainer;
