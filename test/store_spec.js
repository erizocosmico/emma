import expect from 'expect';
import { appStore } from '../src/store';

describe('appStore', () => {
  describe('initial state', () => {
    let state = appStore();

    it('should be an empty input and not loading', () => {
      expect(state.input).toBe('');
      expect(state.loading).toBe(false);
    });
  });

  describe('on LOAD_INPUT action received', () => {
    let state = appStore({}, {type: 'LOAD_INPUT', input: 'foo'});

    it('should be loading and given input', () => {
      expect(state.input).toBe('foo');
      expect(state.loading).toBe(true);
    });
  });

  describe('on CONTENT_LOADED action received', () => {
    let state = appStore({input: 'fooo'}, {
      type: 'CONTENT_LOADED',
      data: {
        type: 'translator'
      }
    });

    it('should not be loading and have a data property. Input should be mantained', () => {
      expect(state.input).toBe('fooo');
      expect(state.loading).toBe(false);
      expect(state.hasOwnProperty('data')).toBe(true);
    });
  });
});
