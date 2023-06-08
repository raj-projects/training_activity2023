import React from 'react';
import Todo from './todo';

const Todos = () => {
  const todos = [
    {
      id: 1,
      title: 'Todo 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: true,
    },
  ];
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
