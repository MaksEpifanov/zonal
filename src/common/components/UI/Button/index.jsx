import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ReactComponent as DeleteSVG } from 'assets/icons/delete.svg';
import { ReactComponent as PlaySVG } from 'assets/icons/play.svg';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  onClick, onDelete, noResponse, primary, item, active, icon, value,
}) => {
  const className = cx({
    Button: true,
    'Button_no-response': noResponse,
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
      <div className={styles.Button__text}>{value}</div>
      {btnDelete}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.bool,
  onDelete: PropTypes.func,
  noResponse: PropTypes.bool,
  active: PropTypes.bool,
  primary: PropTypes.bool,
  icon: PropTypes.element,
  value: PropTypes.string,
};

Button.defaultProps = {
  item: false,
  active: false,
  primary: false,
  icon: <PlaySVG />,
  value: 'start',
  noResponse: false,
  onDelete: () => {},
};
