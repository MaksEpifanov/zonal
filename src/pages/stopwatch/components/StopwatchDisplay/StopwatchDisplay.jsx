import Displays from 'common/components/UI/Displays';
import Tables from 'pages/stopwatch/components/Tables';
import { format } from 'pages/stopwatch/utils';
import { useEffect, useCallback, memo } from 'react';
import useDisplayStopwatch from '../../hooks/useDisplayStopwatch';
import styles from './StopwatchDisplay.module.scss';

const StopwatchDisplay = () => {
  const [info, times, laps, setTime] = useDisplayStopwatch();
  const { main, lap } = times;
  const { isStart } = info;

  const tick = useCallback(() => {
    let { min, sec, ms } = main;
    let { min: minLap, sec: secLap, ms: msLap } = lap;
    ms += 10;
    msLap += 10;
    if (ms >= 1000) {
      sec += 1;
      ms = 0;
    }
    if (msLap >= 1000) {
      secLap += 1;
      msLap = 0;
    }
    if (sec >= 60) {
      min += 1;
      sec = 0;
    }
    if (secLap >= 60) {
      minLap += 1;
      secLap = 0;
    }

    const resObj = { main: { min, sec, ms }, lap: { min: minLap, sec: secLap, ms: msLap } };
    setTime(resObj);
  }, [main, lap, setTime]);

  useEffect(() => {
    let timerId;
    if (isStart) {
      timerId = setInterval(tick, 10);
    }
    return () => clearInterval(timerId);
  }, [isStart, tick]);

  return (
    <div className={styles.StopwatchDisplay}>
      <div className={styles.timers}>
        <Displays>
          {format(main.min)}
          :
          {format(main.sec)}
          :
          {format(main.ms, 'ms')}
        </Displays>
        <div className={styles.timers__second}>
          <Displays isActive>
            {format(lap.min)}
            :
            {format(lap.sec)}
            :
            {format(lap.ms, 'ms')}
          </Displays>
        </div>
      </div>
      <div className={styles.tables}>
        {laps.length ? <Tables data={laps} /> : null }
      </div>
    </div>
  );
};

export default memo(StopwatchDisplay);
