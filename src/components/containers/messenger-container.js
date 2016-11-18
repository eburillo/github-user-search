import React, { Component } from 'react';
import {connect} from 'react-redux';
import Messenger from '../presentational/messenger.js';

export class MessengerContainer extends Component {

  render() {
		return (
			<Messenger message={this.props.repos.message}></Messenger>
		);
	}

}

const mapStateToProps = function(store) {
	return ({
		repos: store.repos
	})
}

export default connect(mapStateToProps) (MessengerContainer);
