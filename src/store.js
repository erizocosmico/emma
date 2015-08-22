import { createStore } from 'redux';

import actions from './actions';
import selectHandler from './handlers';

const initialState = {
  loading: false,
  input: ''
};

export function appStore(state = initialState, action = {}) {
  switch (action.type) {
  case actions.LOAD_INPUT:
    return {
      input: action.input,
      loading: true
    };

  case actions.CONTENT_LOADED:
    let handler = selectHandler(action.data.type);
    return Object.assign({}, state, {
      loading: false,
      data: action.data,
      handler: handler
    });
  default:
    return initialState;
  }
}

export default createStore(appStore);
