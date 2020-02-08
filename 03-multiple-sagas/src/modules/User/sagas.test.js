import { fetchUserFlow } from './sagas';
import { select, call, put } from 'redux-saga/effects';
import { getApiKey } from '../Auth';
import { fetchRequest, fetchSuccess } from './actions';
import { getUserInfo } from './api';

describe('fetchUserFlow', () => {
  const iterator = fetchUserFlow(fetchRequest('test'));

  it('Первый yield — select(getApiKey)', () => {
    expect(iterator.next().value).toEqual(select(getApiKey));
  });

  it('Второй yield — call(getUserInfo, apiKey, username)', () => {
    expect(iterator.next('test_key').value).toEqual(
      call(getUserInfo, 'test_key', 'test')
    );
  });

  it('Третий yield — put(fetchSuccess(response))', () => {
    expect(iterator.next('test_key').value).toEqual(
      put(fetchSuccess('test_key'))
    );
  });
});
