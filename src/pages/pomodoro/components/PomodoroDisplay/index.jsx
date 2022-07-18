import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import Display from 'common/components/UI/Displays';

import styles from './PomodoroDisplay.module.scss';

const cx = classNamesBind.bind(styles);

const timer = '25:00';
const status = 'Time to focus';
const count = 2;

const PomodoroDisplay = ({ className }) => {
  const classNames = cx({
    PomodoroDisplay,
    [className]: !!className,
  });
  return (
    <div className={classNames}>
      <Display>{timer}</Display>
      <div className={styles.PomodoroDisplay__sub}>
        <Display isActive>{status}</Display>
        <Display>{count}</Display>
      </div>
    </div>
  );
};

export default PomodoroDisplay;

PomodoroDisplay.propTypes = {
  className: PropTypes.string,
};

PomodoroDisplay.defaultProps = {
  className: '',
};
