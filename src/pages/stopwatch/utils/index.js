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

export default formatTime;
