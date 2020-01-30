export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export const addIngredient = (from, ingredient) => ({
  type: ADD_INGREDIENT,
  payload: {
    from,
    ingredient
  }
});
