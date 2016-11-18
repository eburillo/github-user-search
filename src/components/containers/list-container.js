import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from '../presentational/list.js';

export class ListContainer extends Component {

  render() {
		return (
			<List repos={this.props.repos.list}></List>
		);
	}

}

const mapStateToProps = function(store) {
	return ({
		repos: store.repos
	})
}

export default connect(mapStateToProps) (ListContainer);
