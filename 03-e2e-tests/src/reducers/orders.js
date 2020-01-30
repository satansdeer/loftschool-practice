import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';
import { nearer } from 'q';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER.toString():
      return [
        ...state,
        {
          id: action.payload.id,
          recipe: action.payload.recipe,
          ingredients: [],
          position: 'clients'
        }
      ];
    case MOVE_ORDER_NEXT.toString():
      return movePizza(state, action);
    case MOVE_ORDER_BACK.toString():
      return movePizza(state, action);
    case ADD_INGREDIENT.toString():
      return addIngrigientToPizza(state, action);
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) => {
  return state.orders.filter(order => order.position === position);
};

const movePizza = (state, action) => {
  let possiblePositions = [
    'clients',
    'conveyor_1',
    'conveyor_2',
    'conveyor_3',
    'conveyor_4',
    'finish'
  ];

  return state.map(order => {
    if (order.id === action.payload) {
      let newPosition;
      switch (action.type) {
        case 'MOVE_ORDER_NEXT':
          newPosition = possiblePositions.indexOf(order.position) + 1;

          if (newPosition === possiblePositions.length - 1) {
            const isEveryIngredientsPresent = order.recipe.every(i =>
              order.ingredients.includes(i)
            );

            if (isEveryIngredientsPresent) {
              return { ...order, position: possiblePositions[newPosition] };
            } else {
              return order;
            }
          }

          return { ...order, position: possiblePositions[newPosition] };
        case 'MOVE_ORDER_BACK':
          newPosition = possiblePositions.indexOf(order.position) - 1;
          if (newPosition === 0) {
            return order;
          } else {
            return { ...order, position: possiblePositions[newPosition] };
          }
        default:
          return order;
      }
    } else {
      return order;
    }
  });
};

const addIngrigientToPizza = (state, action) => {
  let firstOrder = state.find(order => order.position === action.payload.from);

  if (!firstOrder) {
    return state;
  }

  return state.map(order => {
    if (order.id === firstOrder.id) {
      return {
        ...order,
        ingredients: [...order.ingredients, action.payload.ingredient]
      };
    } else {
      return order;
    }
  });
};
