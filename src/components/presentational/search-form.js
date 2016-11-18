import React, { Component } from 'react';

class SearchForm extends Component {

	render() {
		return (
		  <form onSubmit={this.props.onFormSubmit}>
		  	<h3>Search all repositories for a gitHub user</h3>
				<label className="input-wrapper">
		  		<input className="search-form-input" type="text" ref="search" placeholder="Introduce a username" />
				</label>
				<button className="search-button" type="submit">Search</button>
		  </form>
		);
	}

	getValue() {
		return this.refs.search.value;
	}
}

export default SearchForm;
