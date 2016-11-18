import React, { Component } from 'react';
import Repo from '../presentational/repo.js';

class RepoContainer extends Component {

	render() {
		return (
			<Repo name={this.props.repo.name} url={this.props.repo.html_url} desc={this.props.repo.description}></Repo>
		);
	}

}

export default RepoContainer;
