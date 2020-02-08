import reducer from './reducer';
import { addApiKey } from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer Auth', () => {
  const state0 = reducer(undefined, randomAction);

  it('Экшен addApiKey добавляет ключ в state', () => {
    expect(reducer(state0, addApiKey('test')).apiKey).toEqual('test');
  });
});
