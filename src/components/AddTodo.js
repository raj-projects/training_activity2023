import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';

export default function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="addItem"
      />
      <button className="addButton">Add Item</button>
    </form>
  );
}
