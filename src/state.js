import { createStore } from 'redux';
import rootReducer from './rootreducer';
import { createNewBoard, createRandomBoard } from './helpers';
import config from './config';

const board = createRandomBoard(config.INITIAL_BOARD_HEIGHT, config.INITIAL_BOARD_WIDTH);

const initialState = {
	height: config.INITIAL_BOARD_HEIGHT,
	width: config.INITIAL_BOARD_WIDTH,
	board: board,
	isPlaying: true,
	speed: config.INITIAL_TICK_DELAY,
	generation: 0
};

const store = createStore(rootReducer, initialState);

export default store;
