const format = (val, ...rest) => {
  let value = val.toString();
  if (value.length < 2) {
    value = `0${value}`;
  }
  if (rest[0] === 'ms' && value.length < 3) {
    value = `0${value}`;
  }
  return value;
};
const formatTime = (time) => `${format(time.min)}:${format(time.sec)}:${format(time.ms, 'ms')}`;

const getNewTimes = (times) => {
  const { main, lap } = times;
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

  return { main: { min, sec, ms }, lap: { min: minLap, sec: secLap, ms: msLap } };
};

export { formatTime, getNewTimes };
