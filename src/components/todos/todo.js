import React from 'react';

const todo = ({todo}) => {
  const { id, title, completed } = todo;
  const todoItem = <h2>{title}</h2>;
  const isCompleted = completed ? <strike>{todoItem}</strike> : todoItem;

  return <div data-testid={`todo-${id}`}>{isCompleted}</div>;
};

export default todo;
