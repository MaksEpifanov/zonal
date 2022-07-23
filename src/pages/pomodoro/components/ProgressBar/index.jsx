import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import { useSettingsPomodoro, useControlPomodoro, useStatusPomodoro } from 'pages/pomodoro/hooks';

import { formatTimeToPercent } from 'pages/pomodoro/utils';

import styles from './ProgressBar.module.scss';

const cx = classNamesBind.bind(styles);

const ProgressBar = ({ className }) => {
  const classNames = cx({
    ProgressBar,
    [className]: !!className,
  });

  const [timer] = useControlPomodoro();
  const [settings] = useSettingsPomodoro();
  const [status] = useStatusPomodoro();

  const widthBar = formatTimeToPercent(timer, settings, status.timerMode);

  return (
    <div className={classNames}>
      <div className={styles.ProgressBar__bar} style={{ width: widthBar }} />
    </div>
  );
};
export default ProgressBar;

ProgressBar.propTypes = {
  className: PropTypes.string,
};

ProgressBar.defaultProps = {
  className: '',
};
