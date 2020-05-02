import createOrder, { resetModuleVariables } from './logic';

it('Contain keys: type, payload', () => {
  const keys = Object.keys(createOrder());
  expect(keys).toContain('type', 'payload');
});

it('Type is "CREATE_NEW_ORDER"', () => {
  expect(createOrder().type).toBe('CREATE_NEW_ORDER');
});

it('First call return 4 elements in reciepe', () => {
  resetModuleVariables();
  expect(createOrder().payload.recipe.length).toBe(4);
});

it('Fourth call return 5 elemenets in reciepe', () => {
  resetModuleVariables();
  createOrder();
  createOrder();
  createOrder();
  expect(createOrder().payload.recipe.length).toBe(4);
});

describe('Every 4 call increase recipe by 1', () => {
  resetModuleVariables();
  [1, 2, 3, 4, 5, 6].forEach(i => {
    it(`Call ${4 * i} times, recipe length ${4 + i}`, () => {
      createOrder();
      createOrder();
      createOrder();
      expect(createOrder().payload.recipe.length).toBe(4 + i);
    });
  });
});
