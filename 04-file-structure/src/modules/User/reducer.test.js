import reducer from './reducer';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer User', () => {
  const state0 = reducer(undefined, randomAction);

  it('Содержит поле isLoading и data', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'data'])
    );
  });

  it('Экшен user/fetchRequest выставляет флаг isLoading в true', () => {
    expect(reducer(state0, fetchRequest()).isLoading).toBeTruthy();
  });

  it('Экшен user/fetchSuccess выставляет флаг isLoading в false', () => {
    expect(reducer(state0, fetchSuccess('test_data')).isLoading).toBeFalsy();
  });

  it('Экшен user/fetchFailure выставляет флаг isLoading в false', () => {
    expect(reducer(state0, fetchFailure('test_error')).isLoading).toBeFalsy();
  });

  it('Экшен user/fetchSuccess наполняет своим payload поле data', () => {
    expect(reducer(state0, fetchSuccess('test_data')).data).toBe('test_data');
  });
});
