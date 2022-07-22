import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowSVG } from 'assets/icons/arrow.svg';

import useTodos from 'pages/todo/hooks/useTodos';
import useActiveLists from 'pages/todo/hooks/useActiveList';

import styles from './AddTodo.module.scss';

const AddTodo = ({ className }) => {
  const classNames = `${styles.AddTodo} ${className}`;

  const [inputText, setInputText] = useState('');
  const [todos, addTodo] = useTodos();
  const [activeList] = useActiveLists();

  const onAdd = () => {
    const maxId = todos.reduce((acc, curr) => (acc > curr.id ? acc : curr.id), 0);
    const newTodo = {
      id: maxId + 1, idList: activeList, task: inputText, isCompleted: false,
    };

    addTodo(newTodo);
    setInputText('');
  };

  return (
    <div className={classNames}>
      <input className={styles.input} type="text" placeholder="Click to add task" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <ArrowSVG className={styles.arrow} type="button" onClick={onAdd} />
    </div>
  );
};

export default AddTodo;

AddTodo.propTypes = {
  className: PropTypes.string,
};

AddTodo.defaultProps = {
  className: '',
};
