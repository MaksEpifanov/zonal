import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteSVG } from 'assets/icons/delete.svg';
import { ReactComponent as PlaySVG } from 'assets/icons/play.svg';
import styles from './Buttons.module.scss';

const cx = classNames.bind(styles);

const Buttons = ({
  isItem, active, isPrimary, icon, onClick, onDelete, children,
}) => {
  const className = cx({
    btn: true,
    btn__item: isItem,
    btn__item_active: active,
    btn__primary: isPrimary,
  });
  return (
    <div className={styles.Buttons}>
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
      {!isItem ? <button type="button" className={styles.btn__icon} onClick={onClick}>{icon}</button> : null }
      {isItem ? <DeleteSVG onClick={onDelete} className={styles.btn__delete} /> : null}
    </div>
  );
};

export default Buttons;

Buttons.propTypes = {
  isItem: PropTypes.bool,
  active: PropTypes.bool,
  isPrimary: PropTypes.bool,
  icon: PropTypes.element,
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
  icon: <PlaySVG />,
  onDelete: () => {},
};
