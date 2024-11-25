import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';
import next from 'next';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Comprar leche', done: true },
  { id: 1, title: 'Comer tacos', done: false },
  { id: 2, title: 'Preparar té', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([...todos,
    {
      id: nextId++,
      title: title,
      done: false
    }])
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(item => {
      if (item.id === nextTodo.id) {
        return nextTodo;
      } else {
        return item;
      }
    }));

    // const todo = todos.find(t =>
    //   t.id === nextTodo.id
    // );
    // todo.title = nextTodo.title;
    // todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(item => item.id !== todoId));
  }
  

return (
  <>
    <AddTodo
      onAddTodo={handleAddTodo}
    />
    <TaskList
      todos={todos}
      onChangeTodo={handleChangeTodo}
      onDeleteTodo={handleDeleteTodo}
    />
  </>
);
}
