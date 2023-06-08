import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../components/todos/todo';

afterEach(() => {
  cleanup();
});

describe('Todo component', () => {
  test('should renders non-comleted todo', () => {
    const todos = [
      {
        id: 1,
        title: 'Todo 111',
        completed: false,
      },
    ];

    render(<Todo todo={todos} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Todo 111');
  });

  test('should renders comleted todo', () => {
    const todo = [
      {
        id: 2,
        title: 'Todo 222',
        completed: true,
      },
    ];

    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Todo 222');
  });
});
