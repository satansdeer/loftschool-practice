import { createStore } from "redux";

function addTodo(text) {
  return {
    type: "ADD_TODO",
    payload: text
  };
}

function todoApp(state = { todos: [] }, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload
          }
        ]
      };
    default:
      return state;
  }
}

let store = createStore(
  todoApp,
  window.STATE_FROM_SERVER,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Выведем в консоль начальное состояние
console.log(store.getState());

// Каждый раз при обновлении состояния — выводим его
// Отметим, что subscribe() возвращает функцию для отмены регистрации слушателя
let unsubscribe = store.subscribe(() => console.log(store.getState()));

// Отправим несколько действий
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));

// Прекратим слушать обновление состояния
unsubscribe();
