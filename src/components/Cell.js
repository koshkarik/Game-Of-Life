import React from 'react';

class Cell extends React.Component {
	shouldComponentUpdate(next) {
		let props = this.props;
		return props.cell !== next.cell;
	}
	render() {
		return (
			<div
				className="cell"
				style={
					this.props.cell === 0
						? { backgroundColor: '#3a3636' }
						: this.props.cell === 1 ? { backgroundColor: '#ddc190' } : { backgroundColor: '#896931' }
				}
				onClick={() => this.props.handleChange(this.props.wCoord)}
			/>
		);
	}
}

export default Cell;
