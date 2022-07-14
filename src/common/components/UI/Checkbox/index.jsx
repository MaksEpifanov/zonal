import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

const Checkbox = ({ id, checked, onChange }) => (
  <label htmlFor={`_checkbox${id}`} className={styles.Checkbox}>
    <input id={`_checkbox${id}`} type="checkbox" checked={checked} onChange={onChange} />
  </label>
);

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
