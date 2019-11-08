import React from "react";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { useSelector, shallowEqual } from 'react-redux'


const TodoList = () => {
  const todos = useSelector(getTodosByVisibilityFilter, shallowEqual)

  return <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
};

export default TodoList;