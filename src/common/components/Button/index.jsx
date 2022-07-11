import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ReactComponent as DeleteSVG } from 'assets/icons/delete.svg';
import { ReactComponent as PlaySVG } from 'assets/icons/play.svg';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  children, onClick, onDelete, primary, item, active, icon,
}) => {
  const className = cx({
    Button: true,
    Button__item: item,
    Button__item_active: active,
    Button__primary: primary,
  });

  const btnIcon = !item ? (
    <div className={styles.Button__icon}>
      {icon}
    </div>
  ) : null;

  const btnDelete = item ? (
    <div className={styles.Button__delete}>
      <DeleteSVG onClick={(e) => {
        e.stopPropagation();
        onDelete();
      }}
      />
    </div>
  ) : null;

  return (
    <button type="button" className={className} onClick={onClick}>
      {btnIcon}
      <span className={styles.Button__text}>{children}</span>
      {btnDelete}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.bool,
  onDelete: PropTypes.func,
  active: PropTypes.bool,
  primary: PropTypes.bool,
  icon: PropTypes.element,
};

Button.defaultProps = {
  item: false,
  active: false,
  primary: false,
  icon: <PlaySVG />,
  onDelete: () => {},
};
