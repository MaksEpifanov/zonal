import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import useSettingsPomodoro from 'pages/pomodoro/hooks/useSettingsPomodoro';
import useControlPomodoro from 'pages/pomodoro/hooks/useControlPomodoro';
import useDisplayPomodoro from 'pages/pomodoro/hooks/useDisplayPomodoro';
import { formatTimeToPercent } from 'pages/pomodoro/utils';

import styles from './ProgressBar.module.scss';

const cx = classNamesBind.bind(styles);

const ProgressBar = ({ className }) => {
  const classNames = cx({
    ProgressBar,
    [className]: !!className,
  });

  const [timer] = useDisplayPomodoro();
  const [settings] = useSettingsPomodoro();
  const [status] = useControlPomodoro();

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
