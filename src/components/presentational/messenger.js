import React, { Component } from 'react';

export class Messenger extends Component {

	render() {
		return (
			<p>
				{this.props.message}
			</p>
		);
	}

}

export default Messenger;
