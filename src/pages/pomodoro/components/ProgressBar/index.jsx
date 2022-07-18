import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import styles from './ProgressBar.module.scss';

const cx = classNamesBind.bind(styles);

const ProgressBar = ({ className, max, value }) => {
  const classNames = cx({
    ProgressBar,
    [className]: !!className,
  });

  return (
    <progress max={max} value={value} className={classNames} />
  );
};
export default ProgressBar;

ProgressBar.propTypes = {
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

ProgressBar.defaultProps = {
  className: '',
};
