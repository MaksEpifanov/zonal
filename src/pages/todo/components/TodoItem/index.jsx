import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './TodoItem.module.scss';

const TodoItem = ({
  list, text, isChecked, onCheck, onDelete,
}) => {
  const [checked, setCheck] = useState(isChecked);

  const onChange = () => {
    setCheck((prevCheked) => !prevCheked);
    onCheck(checked);
  };

  return (
    <div className={styles.TodoItem}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className={styles.todo}>{text}</div>
      <div className={styles.list}>{list}</div>
      <button type="button" onClick={onDelete}>delete</button>
    </div>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  list: PropTypes.string,
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  list: '',
};
