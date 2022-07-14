import PropTypes from 'prop-types';
import { ReactComponent as ArrowSVG } from 'assets/icons/arrow.svg';
import styles from './AddTodo.module.scss';

const AddTodo = ({ className, onAdd }) => {
  const classNames = `${styles.AddTodo} ${className}`;
  return (
    <div className={classNames}>
      <input className={styles.input} type="text" placeholder="Click to add task" />
      <ArrowSVG className={styles.arrow} type="button" onClick={onAdd} />
    </div>
  );
};

export default AddTodo;

AddTodo.propTypes = {
  className: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

AddTodo.defaultProps = {
  className: '',
};
