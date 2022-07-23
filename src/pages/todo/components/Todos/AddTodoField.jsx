import PropTypes from 'prop-types';

import { ReactComponent as ArrowSVG } from 'assets/icons/arrow.svg';
import TextInput from 'common/components/UI/TextInput';

import useTodos from 'pages/todo/hooks/useTodos';
import useActiveLists from 'pages/todo/hooks/useActiveList';

import styles from './Todos.module.scss';

const AddTodoField = ({ className }) => {
  const classNames = `${styles.AddTodo} ${className}`;

  const [todos, addTodo] = useTodos();
  const [activeList] = useActiveLists();

  const onSubmit = (textValue) => {
    const maxId = todos.reduce((acc, curr) => (acc > curr.id ? acc : curr.id), 0);
    const newTodo = {
      id: maxId + 1, idList: activeList, task: textValue, isCompleted: false,
    };

    addTodo(newTodo);
  };

  return (
    <TextInput
      className={classNames}
      submitButton={<ArrowSVG />}
      onSubmit={onSubmit}
      placeholder="Click to input task"
    />
  );
};

export default AddTodoField;

AddTodoField.propTypes = {
  className: PropTypes.string,
};

AddTodoField.defaultProps = {
  className: '',
};
