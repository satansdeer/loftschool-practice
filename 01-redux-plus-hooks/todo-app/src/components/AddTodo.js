import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch()


  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <input onChange={e => setInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
