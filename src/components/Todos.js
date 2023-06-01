import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

export default function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ol>
    </div>
  );
}
