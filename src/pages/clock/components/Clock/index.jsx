import { useState, useEffect } from 'react';
import useClock from 'pages/clock/hooks/useClock';

import AnalogClock from './AnalogClock';
import DigitClock from './DigitClock';

import style from './index.module.scss';

const formatTime = (time) => (time < 10 ? `0${time}` : time);

const Clock = () => {
  const [clock, setClock] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [{ timeZone = 0 }] = useClock('active');

  function handleDate() {
    const date = new Date();
    date.setHours(date.getUTCHours() + timeZone);
    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    setClock({ hours, minutes, seconds });
  }

  useEffect(() => {
    const timeId = setInterval(handleDate, 1000);
    return () => clearInterval(timeId);
  });

  return (
    <div className={style.Clock}>
      <DigitClock clock={clock} />
      <AnalogClock clock={clock} />
    </div>
  );
};

export default Clock;
