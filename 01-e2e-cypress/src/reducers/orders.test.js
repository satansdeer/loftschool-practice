import { createNewOrder } from '../modules/clients';
import { moveOrderBack, moveOrderNext } from '../actions/moveOrder';

import orders from './orders';

describe('CREATE_NEW_ORDER создает новый заказ', () => {
  const state0 = orders(undefined, 'test');
  const state1 = orders(state0, createNewOrder(1, ['test']));

  it('с ключами id, ingredients, position, recipe', () => {
    expect(Object.keys(state1[0])).toContain(
      'id',
      'ingredients',
      'position',
      'recipe'
    );
  });
  it('position = clients', () => {
    expect(state1[0].position).toBe('clients');
  });
  it('ingredients = []', () => {
    expect(state1[0].ingredients).toEqual([]);
  });
});

describe('MOVE_ORDER_NEXT двигает position заказа', () => {
  const state0 = orders(undefined, 'test');
  const state1 = orders(state0, createNewOrder(1, ['test']));

  const state2 = orders(state1, moveOrderNext(1));
  it('clients -> conveyor_1', () => {
    expect(state2[0].position).toBe('conveyor_1');
  });
  const state3 = orders(state2, moveOrderNext(1));
  it('conveyor_1 -> conveyor_2', () => {
    expect(state3[0].position).toBe('conveyor_2');
  });
  const state4 = orders(state3, moveOrderNext(1));
  it('conveyor_2 -> conveyor_3', () => {
    expect(state4[0].position).toBe('conveyor_3');
  });
  const state5 = orders(state4, moveOrderNext(1));
  it('conveyor_3 -> conveyor_4', () => {
    expect(state5[0].position).toBe('conveyor_4');
  });
});
describe('MOVE_ORDER_BACK двигает position заказа', () => {
  const state0 = orders(undefined, 'test');
  const state1 = orders(state0, createNewOrder(1, ['test']));
  const state2 = orders(state1, moveOrderNext(1));
  const state3 = orders(state2, moveOrderNext(1));
  const state4 = orders(state3, moveOrderNext(1));
  const state5 = orders(state4, moveOrderNext(1));

  const state6 = orders(state5, moveOrderBack(1));
  it('conveyor_4 -> conveyor_3', () => {
    expect(state6[0].position).toBe('conveyor_3');
  });
  const state7 = orders(state6, moveOrderBack(1));
  it('conveyor_3 -> conveyor_2', () => {
    expect(state7[0].position).toBe('conveyor_2');
  });
  const state8 = orders(state7, moveOrderBack(1));
  it('conveyor_2 -> conveyor_1', () => {
    expect(state8[0].position).toBe('conveyor_1');
  });

});
