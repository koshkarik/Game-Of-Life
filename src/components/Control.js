import React from 'react';
import { connect } from 'react-redux';
import {
	togglePauseStart,
	clearGame,
	changeSpeed,
	changeWidth,
	changeHeight,
	makeNeighbsArray,
	clearGeneration
} from '../actions';

function Control(props) {
	function changeSpeed(e) {
		let value = e.target.value;
		props.changeSpeed(value);
	}
	function changeWidth(e) {
		let value = Number(e.target.value);
		props.changeWidth(value);
		props.makeNeighbsArray(props.width, props.height);
		props.clearGame();
	}
	function changeHeight(e) {
		let value = Number(e.target.value);
		props.changeHeight(value);
		props.makeNeighbsArray(props.width, props.height);
		props.clearGame();
	}
	function clearGame() {
		props.clearGame();
		setTimeout(() => props.clearGeneration(), 100);
	}

	return (
		<div className="all-controls">
			<div className="sm-wrap">
				<button
					className="pause"
					onClick={() => props.togglePauseStart()}
					style={props.isPlaying ? { backgroundColor: '#722c27' } : { backgroundColor: '#7f843a' }}>
					{props.isPlaying ? 'Pause' : 'Start'}
				</button>
				<button
					className="clear"
					onClick={() => {
						clearGame();
					}}>
					Clear
				</button>
			</div>

			<div className="sm-wrap low">
				<p>Change speed</p>
				<input type="range" min="10" max="200" onChange={e => changeSpeed(e)} />
			</div>
			<div className="sm-wrap low">
				<p>Change width</p>
				<input type="range" min="20" max="61" onChange={e => changeWidth(e)} />
			</div>
			<div className="sm-wrap low">
				<p>Change height</p>
				<input type="range" min="15" max="50" onChange={e => changeHeight(e)} />
			</div>
			<div className="sm-wrap low">
				<p>generation</p>
				<p>
					<span className="big">{props.generation}</span>
				</p>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	isPlaying: state.isPlaying,
	width: state.width,
	height: state.height,
	generation: state.generation
});

const mapDispatchToProps = dispatch => ({
	togglePauseStart: () => dispatch(togglePauseStart()),
	clearGame: () => dispatch(clearGame()),
	changeSpeed: speed => dispatch(changeSpeed(speed)),
	changeWidth: width => dispatch(changeWidth(width)),
	changeHeight: height => dispatch(changeHeight(height)),
	makeNeighbsArray: (width, height) => dispatch(makeNeighbsArray(width, height)),
	clearGeneration: () => dispatch(clearGeneration())
});

export default connect(mapStateToProps, mapDispatchToProps)(Control);
