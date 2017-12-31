import React from 'react';
import Cell from './Cell';
import { connect } from 'react-redux';
import { toggleLifeForms } from '../actions';

class BoardRow extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	// shouldComponentUpdate(next) {
	// 	let props = this.props;
	// 	return props.row !== next.row;
	// }
	handleChange(w) {
		this.props.toggleLife(this.props.hCoord, w);
	}
	render() {
		return (
			<div className="row">
				{this.props.row.map((cell, ind) => (
					<Cell key={ind} cell={cell} wCoord={ind} handleChange={this.handleChange} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	board: state.board
});

const mapDispatchToProps = dispatch => ({
	toggleLife: (h, w) => dispatch(toggleLifeForms(h, w))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardRow);
