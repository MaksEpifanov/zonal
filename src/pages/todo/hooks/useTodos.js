import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import {
  addTodoAction,
  deleteTodoAction,
  completeTodoAction,
} from 'store/actions';

const useControlsStopwatch = () => {
  const [{ todo }, dispatch] = useContext(StoreContext);

  const addTodo = (todo) => dispatch(addTodoAction(todo));
  const deleteTodo = (id) => dispatch(deleteTodoAction(id));
  const completeTodo = (id) => dispatch(completeTodoAction(id));

  return [todo.todos, addTodo, deleteTodo, completeTodo];
};

export default useControlsStopwatch;
