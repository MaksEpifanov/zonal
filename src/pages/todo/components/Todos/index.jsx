import PropTypes from 'prop-types';

import { useTodos, useActiveLists, useLists } from 'pages/todo/hooks';

import TodoItem from '../TodoItem';
import AddTodoField from './AddTodoField';

import styles from './Todos.module.scss';

const Todos = ({ className }) => {
  const classNames = `${styles.Todos} ${className}`;

  const [todos, , deleteTodo, completeTodo] = useTodos();
  const [lists] = useLists();
  const [activeList] = useActiveLists();

  const labelActiveTodos = todos
    .filter((todo) => (activeList === 0
      ? !todo.isCompleted
      : !todos.isCompleted && todo.idList === activeList))
    .map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.task}
        list={lists.filter((list) => list.id === todo.idList)[0].name}
        isChecked={todo.isCompleted}
        onCheck={() => completeTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
      />
    ));

  const labelComoletedTodos = todos
    .filter((todo) => (activeList === 0
      ? todo.isCompleted
      : todos.isCompleted && todo.idList === activeList))
    .map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.task}
        list={lists.filter((list) => list.id === todo.idList)[0].name}
        isChecked={todo.isCompleted}
        onCheck={() => completeTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
      />
    ));

  return (
    <div className={classNames}>
      <AddTodoField className={styles.Todos_newTodoFild} />
      {labelActiveTodos}
      {labelComoletedTodos}
    </div>
  );
};

export default Todos;

Todos.propTypes = {
  className: PropTypes.string,
};

Todos.defaultProps = {
  className: '',
};
