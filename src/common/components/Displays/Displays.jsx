import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Displays.module.scss';

const cx = classNames.bind(styles);

const Displays = ({ isActive, children }) => {
  const className = cx({
    Displays: true,
    display_active: isActive,
  });

  return (
    <div className={className}>{children}</div>
  );
};

export default Displays;

Displays.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Displays.defaultProps = {
  isActive: false,
};
