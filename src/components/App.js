import React from 'react';
import Control from './Control';
import Board from './Board';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<h1>Conway's Game of Life</h1>
				<div className="control">
					<Control />
				</div>
				<div className="board-wrap">
					<Board />
				</div>
			</div>
		);
	}
}

export default App;
