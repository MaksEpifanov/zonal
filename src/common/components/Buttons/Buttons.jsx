import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteSVG } from 'assets/icons/delete.svg';
import styles from './Buttons.module.scss';

const cx = classNames.bind(styles);

const Buttons = ({
  isItem, active, isPrimary, onClick, onDelete, children,
}) => {
  const className = cx({
    btn: true,
    btn_isItem: isItem,
    btn_isItem_active: active,
    btn_isPrimary: isPrimary,
  });
  return (
    <div className={styles.Buttons}>
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
      {isItem ? <DeleteSVG onClick={onDelete} className={styles.btn__delete} /> : null}
    </div>
  );
};

export default Buttons;

Buttons.propTypes = {
  isItem: PropTypes.bool,
  active: PropTypes.bool,
  isPrimary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

Buttons.defaultProps = {
  isItem: false,
  active: false,
  isPrimary: false,
  onDelete: () => {},
};
