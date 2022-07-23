import PropTypes from 'prop-types';

import useTodos from 'pages/todo/hooks/useTodos';
import useLists from 'pages/todo/hooks/useLists';

import TodoItem from '../TodoItem';
import AddTodo from '../AddTodo';

import styles from './Todos.module.scss';

const Todos = ({ className }) => {
  const classNames = `${styles.Todos} ${className}`;

  const [todos, , deleteTodo, completeTodo] = useTodos();
  const [lists] = useLists();

  const labelTodos = todos.map((todo) => (
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
      <AddTodo className={styles.Todos_newTodoFild} />
      {labelTodos}
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
