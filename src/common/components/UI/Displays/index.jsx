import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import styles from './Displays.module.scss';

const cx = classNamesBind.bind(styles);

const Displays = ({ className, isActive, children }) => {
  const classNames = cx({
    [className]: !!className,
    Displays: true,
    Displays_active: isActive,
  });

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default Displays;

Displays.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Displays.defaultProps = {
  className: '',
  isActive: false,
};
