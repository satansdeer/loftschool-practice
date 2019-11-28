import { createNewOrder } from './actions';
import ingredients from '../../ingredients';
import uniqueId from 'lodash/uniqueId'

const ingredientNames = ingredients.map(({ name }) => name);

let ingredientCount = 4;
let iteration = 0;

export const resetModuleVariables = () => {
  ingredientCount = 4;
  iteration = 0;
};

export default function() {
  const recipe = getNewRecipe(ingredientCount);
  const orderAction = createNewOrder(uniqueId(), recipe);
  iteration += 1;
  ingredientCount = Math.min(4 + Math.floor(iteration / 4), 10);
  return orderAction;
}

const getNewRecipe = maxIngredients => {
  let recipe = [];

  while (recipe.length < maxIngredients) {
    recipe.push(
      ingredientNames[Math.round(Math.random() * (ingredientNames.length - 1))]
    );
    recipe = recipe.filter((v, i, a) => a.indexOf(v) === i);
  }

  return recipe;
};
