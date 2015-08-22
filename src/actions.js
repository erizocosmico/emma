const actions = {
  LOAD_INPUT: 'LOAD_INPUT',
  CONTENT_LOADED: 'CONTENT_LOADED'
};

export function loadInput(input) {
  return {
    type: actions.LOAD_INPUT,
    input
  };
}

export function contentLoaded(data) {
  return {
    type: actions.CONTENT_LOADED,
    data
  };
}

export default actions;
