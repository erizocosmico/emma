import expect from 'expect';
import actions, { loadInput, contentLoaded } from '../src/actions';

describe('actions', () => {
  it('LOAD_INPUT should be "LOAD_INPUT"', () => {
    expect(actions.LOAD_INPUT).toBe('LOAD_INPUT');
  });

  it('CONTENT_LOADED should be "CONTENT_LOADED"', () => {
    expect(actions.CONTENT_LOADED).toBe('CONTENT_LOADED');
  });

  describe('loadInput', () => {
    let action = loadInput('foo');

    it('should return the given input', () => {
      expect(action.type).toBe(actions.LOAD_INPUT);
      expect(action.input).toBe('foo');
    });
  });

  describe('contentLoaded', () => {
    let action = contentLoaded({a: 1});
    
    it('should return the given data', () => {
      expect(action.type).toBe(actions.CONTENT_LOADED);
      expect(action.data).toEqual({a: 1});
    });
  });
});
