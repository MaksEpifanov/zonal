import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import Button from 'common/components/UI/Button';
import { ReactComponent as NextSVG } from 'assets/icons/next.svg';
import { ReactComponent as PauseSVG } from 'assets/icons/pause.svg';

import { useControlPomodoro, useResetPomodoro, useStatusPomodoro } from 'pages/pomodoro/hooks';
import { getMode } from 'pages/pomodoro/utils/index';

import PomodoroOptions from '../PomodoroOptions';

import styles from './PomodoroControls.module.scss';

const cx = classNamesBind.bind(styles);

const PomodoroControls = ({ className }) => {
  const classNames = cx({
    PomodoroControls,
    [className]: !!className,
  });

  const [status, toggleTimerStatus, changeTimerMode] = useStatusPomodoro();
  const [, lap] = useControlPomodoro();
  const [resetTimer] = useResetPomodoro();

  const setMode = () => {
    const timerMode = getMode(status.timerMode, lap);
    changeTimerMode(timerMode);
    resetTimer();
  };

  const PrimaryButton = (
    <Button
      primary
      onClick={toggleTimerStatus}
      icon={status.isTimerOn ? <PauseSVG /> : undefined}
      value={status.isTimerOn ? 'pause' : undefined}
    />
  );

  return (
    <div className={classNames}>
      <div className={styles.PomodoroControls__upBtns}>
        <div className={styles.PomodoroControls__mainBtn}>
          {PrimaryButton}
        </div>
        <Button icon={<NextSVG />} value="next" onClick={setMode} />
      </div>
      <PomodoroOptions className={styles.PomodoroControls__downBtns} disabled={status.isTimerOn} />
    </div>
  );
};

export default PomodoroControls;

PomodoroControls.propTypes = {
  className: PropTypes.string,
};

PomodoroControls.defaultProps = {
  className: '',
};
