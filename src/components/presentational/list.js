import React, { Component } from 'react';
import RepoContainer from '../containers/repo-container.js';

export class List extends Component {

	render() {
		return (
			<ul className="repo-list">
				{this.props.repos.map(this.displayRepo)}
			</ul>
		);
	}

	displayRepo(repo, i) {
		return (
			<RepoContainer key={i} repo={repo}></RepoContainer>
		);
	}
}

export default List;
