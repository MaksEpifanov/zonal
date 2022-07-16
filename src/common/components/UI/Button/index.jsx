import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import { ReactComponent as DeleteSVG } from 'assets/icons/delete.svg';
import { ReactComponent as PlaySVG } from 'assets/icons/play.svg';
import styles from './Button.module.scss';

const cx = classNamesBind.bind(styles);

const Button = ({
  className, onClick, onDelete, noResponse, primary, item, active, icon, value, disabled,
}) => {
  const classNames = cx({
    Button: true,
    'Button_no-response': noResponse,
    Button__item: item,
    Button__item_active: active,
    Button__primary: primary,
    className: !!className,
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
    <button type="button" className={classNames} onClick={onClick} disabled={disabled}>
      {btnIcon}
      <div className={styles.Button__text}>{value}</div>
      {btnDelete}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.bool,
  onDelete: PropTypes.func,
  noResponse: PropTypes.bool,
  active: PropTypes.bool,
  primary: PropTypes.bool,
  icon: PropTypes.element,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  item: false,
  active: false,
  primary: false,
  icon: <PlaySVG />,
  value: 'start',
  noResponse: false,
  disabled: false,
  onDelete: () => { },
};
