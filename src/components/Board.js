import React from 'react';
import BoardRow from './BoardRow';
import { connect } from 'react-redux';
import { makeNeighbsArray, makeLifeTick, plusGeneration, clearGeneration, clearGame } from '../actions';
import { checkIfEmpty } from '../helpers';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.startGame = this.startGame.bind(this);
		this.makeGame = this.makeGame.bind(this);
	}
	componentWillReceiveProps(next) {
		if (this.props.playing !== next.playing) {
			this.startGame();
		}
	}
	componentDidMount() {
		this.props.setAllNeighbs();
		this.startGame();
	}
	startGame() {
		this.timeout = setTimeout(this.makeGame, this.props.speed);
	}
	makeGame() {
		this.props.plusGeneration();
		this.props.makeLifeTick();
		if (this.props.playing) {
			if (!checkIfEmpty(this.props.board, this.props.width, this.props.height)) {
				this.startGame();
			} else {
				this.props.clearGame();
				let obj = this.props;
				setTimeout(() => obj.clearGame(), 100);
			}
		}
	}
	render() {
		const styleWidth = {
			width: `${this.props.width * 20}px`,
			height: `${this.props.height * 20}px`
		};
		return (
			<div className="board" style={styleWidth}>
				{this.props.board.map((row, ind) => <BoardRow key={ind} row={row} hCoord={ind} />)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		board: state.board,
		playing: state.isPlaying,
		speed: state.speed,
		width: state.width,
		height: state.height
	};
}

const mapDispatchToProps = dispatch => ({
	setAllNeighbs: () => dispatch(makeNeighbsArray()),
	makeLifeTick: () => dispatch(makeLifeTick()),
	plusGeneration: () => dispatch(plusGeneration()),
	clearGame: () => dispatch(clearGame()),
	clearGeneration: () => dispatch(clearGeneration())
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
