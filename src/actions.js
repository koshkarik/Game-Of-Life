const TOGGLE_LIFE_FORMS = 'TOGGLE_LIFE_FORMS';
const GET_ALL_NEIGHBS = 'GET_ALL_NEIGHBS';
const MAKE_LIFE_TICK = 'MAKE_LIFE_TICK';
const CLEAR_GAME = 'CLEAR_GAME';
const TOGGLE_PAUSE_START = 'TOGGLE_PAUSE_START';
const CHANGE_SPEED = 'CHANGE_SPEED';
const CHANGE_WIDTH = 'CHANGE_WIDTH';
const CHANGE_HEIGHT = 'CHANGE_HEIGHT';
const PLUS_GENERATION = 'PLUS_GENERATION';
const CLEAR_GENERATION = 'CLEAR_GENERATION';

export const actionTypes = {
  TOGGLE_LIFE_FORMS,
  GET_ALL_NEIGHBS,
  MAKE_LIFE_TICK,
  CLEAR_GAME,
  TOGGLE_PAUSE_START,
  CHANGE_SPEED,
  CHANGE_WIDTH,
  CHANGE_HEIGHT,
  PLUS_GENERATION,
  CLEAR_GENERATION
};

export function clearGeneration() {
  return {
    type: CLEAR_GENERATION
  };
}

export function plusGeneration() {
  return {
    type: PLUS_GENERATION
  };
}

export function changeWidth(width) {
  return {
    type: CHANGE_WIDTH,
    width
  };
}

export function changeHeight(height) {
  return {
    type: CHANGE_HEIGHT,
    height
  };
}

export function changeSpeed(speed) {
  return {
    type: CHANGE_SPEED,
    speed
  };
}

export function toggleLifeForms(h, w) {
  return {
    type: TOGGLE_LIFE_FORMS,
    h,
    w
  };
}

export function makeNeighbsArray() {
  return {
    type: GET_ALL_NEIGHBS
  };
}

export function makeLifeTick() {
  return {
    type: MAKE_LIFE_TICK
  };
}

export function clearGame() {
  return {
    type: CLEAR_GAME
  };
}

export function togglePauseStart() {
  return {
    type: TOGGLE_PAUSE_START
  };
}
