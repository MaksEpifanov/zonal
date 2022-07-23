import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import styles from './Displays.module.scss';

const cx = classNamesBind.bind(styles);

const Displays = ({ className, isActive, value }) => {
  const classNames = cx({
    [className]: !!className,
    Displays: true,
    Displays_active: isActive,
  });

  return (
    <div className={classNames}>
      {value}
    </div>
  );
};

export default Displays;

Displays.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

Displays.defaultProps = {
  className: '',
  isActive: false,
};
