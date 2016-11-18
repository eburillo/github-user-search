import React, { Component } from 'react';

export class Repo extends Component {

	render() {
		return (
			<li className="repo-item">
				<a className="repo-link" target="_blank" href={this.props.url}>{this.props.name}</a>
				<p className="repo-desc">{this.props.desc}</p>
			</li>
		);
	}
}

export default Repo;
