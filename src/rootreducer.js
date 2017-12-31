import { actionTypes } from './actions';
import { clickOnCell, setNeighbors, makeLife, createEmptyBoard, changeWidth, changeHeight } from './helpers';

export default function rootReducer(state = {}, action) {
	let newEmptyBoard = createEmptyBoard(state.height, state.width);
	let neighbsArr = setNeighbors(state.width, state.height);
	switch (action.type) {
		case actionTypes.TOGGLE_LIFE_FORMS:
			const changedBoard = clickOnCell(state.board, action.h, action.w);
			return {
				...state,
				board: changedBoard
			};
		case actionTypes.GET_ALL_NEIGHBS:
			return {
				...state,
				allNeighbs: neighbsArr
			};
		case actionTypes.MAKE_LIFE_TICK:
			const boardAfterTick = makeLife(state.board, state.allNeighbs, state.width, state.height);
			return {
				...state,
				board: boardAfterTick
			};
		case actionTypes.TOGGLE_PAUSE_START:
			return {
				...state,
				isPlaying: !state.isPlaying
			};

		case actionTypes.CLEAR_GAME:
			return {
				...state,
				board: newEmptyBoard,
				isPlaying: false,
				generation: 0
			};
		case actionTypes.CHANGE_SPEED:
			return {
				...state,
				speed: action.speed
			};
		case actionTypes.CHANGE_WIDTH:
			return {
				...state,
				width: action.width
			};
		case actionTypes.CHANGE_HEIGHT:
			return {
				...state,
				height: action.height
			};
		case actionTypes.PLUS_GENERATION:
			let generation = state.generation + 1;
			return {
				...state,
				generation: generation
			};
		case actionTypes.CLEAR_GENERATION:
			return {
				...state,
				generation: 0
			};

		default:
			return state;
	}
}
