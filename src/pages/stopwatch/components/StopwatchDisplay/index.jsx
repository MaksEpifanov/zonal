import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import Displays from 'common/components/UI/Displays';
import Tables from 'pages/stopwatch/components/Tables';

import { formatTime, getNewTimes } from 'pages/stopwatch/utils';
import useDisplayStopwatch from 'pages/stopwatch/hooks/useDisplayStopwatch';

import styles from './StopwatchDisplay.module.scss';

const cx = classNamesBind.bind(styles);

const StopwatchDisplay = ({ className }) => {
  const classNames = cx({
    StopwatchDisplay,
    [className]: !!className,
  });

  const [{ isStart }, times, laps, setTime] = useDisplayStopwatch();

  const tick = useCallback(() => {
    const newTimes = getNewTimes(times);
    setTime(newTimes);
  }, [times, setTime]);

  useEffect(() => {
    let timerId;
    if (isStart) {
      clearInterval(timerId);
      timerId = setInterval(tick, 10);
    }
    return () => clearInterval(timerId);
  }, [isStart, tick]);

  return (
    <div className={classNames}>
      <div className={styles.timers}>
        <Displays value={formatTime(times.main)} />
        <Displays isActive className={styles.timers__second} value={formatTime(times.lap)} />
      </div>
      {laps.length ? <Tables data={laps} /> : null }
    </div>
  );
};

export default StopwatchDisplay;

StopwatchDisplay.propTypes = {
  className: PropTypes.string,
};

StopwatchDisplay.defaultProps = {
  className: '',
};
