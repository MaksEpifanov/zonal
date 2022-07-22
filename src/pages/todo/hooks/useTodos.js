import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import {
  addTodoAction,
  deleteTodoAction,
  completeTodoAction,
} from 'store/actions';

const useTodos = () => {
  const [{ todo }, dispatch] = useContext(StoreContext);

  const addTodo = (newTodo) => dispatch(addTodoAction(newTodo));
  const deleteTodo = (id) => dispatch(deleteTodoAction(id));
  const completeTodo = (id) => dispatch(completeTodoAction(id));

  return [todo.todos, addTodo, deleteTodo, completeTodo];
};

export default useTodos;
