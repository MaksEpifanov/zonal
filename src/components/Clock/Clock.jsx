import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnalogClock from './AnalogClock';
import DigitClock from './DigitClock';
import style from './Clock.module.scss';

const formatTime = (time) => (time < 10 ? `0${time}` : time);

const Clock = ({ timeZone }) => {
  const [clock, setClock] = useState({ hours: 0, minutes: 0, seconds: 0 });

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

Clock.propTypes = {
  timeZone: PropTypes.number,
};

Clock.defaultProps = {
  timeZone: 0,
};
