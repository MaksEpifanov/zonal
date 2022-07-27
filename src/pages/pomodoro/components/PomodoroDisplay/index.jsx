import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import Display from 'common/components/UI/Displays';
import { useControlPomodoro, useResetPomodoro, useStatusPomodoro } from 'pages/pomodoro/hooks';
import { formatTimer, getMode } from 'pages/pomodoro/utils';

import styles from './PomodoroDisplay.module.scss';

const cx = classNamesBind.bind(styles);

const PomodoroDisplay = ({ className }) => {
  const classNames = cx({
    PomodoroDisplay,
    [className]: !!className,
  });

  const [{ isTimerOn, timerMode }, , changeTimerMode] = useStatusPomodoro();
  const [timer, lap, countTimer, countLap] = useControlPomodoro();
  const [resetTimer] = useResetPomodoro();
  const { t } = useTranslation('translation', { keyPrefix: 'pomodoro' });

  useEffect(() => {
    let tick;
    if (isTimerOn) {
      clearInterval(tick);
      tick = setInterval(countTimer, 1000);
    }

    if (timer === 0) {
      if (timerMode === 'focus') {
        countLap();
      }
      changeTimerMode(getMode(timerMode, lap + 1));
      resetTimer();
    }
    return () => clearInterval(tick);
  }, [isTimerOn, countTimer, changeTimerMode, countLap, lap, resetTimer, timer, timerMode]);

  const getTranslateDisplay = (mode) => {
    switch (mode) {
      case 'short break': return t('short_break');
      case 'long break': return t('long_break');
      default: return `${t('time_to')} ${t('focus')}`;
    }
  };

  return (
    <div className={classNames}>
      <Display value={formatTimer(timer)} />
      <div className={styles.PomodoroDisplay__sub}>
        <Display isActive value={getTranslateDisplay(timerMode)} />
        <Display value={String(lap)} />
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
