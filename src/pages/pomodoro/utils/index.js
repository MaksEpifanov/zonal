export const getMode = (prevMod, lap) => {
  if (prevMod === 'focus' && lap !== 0 && lap % 4 === 0) return 'long break';
  if (prevMod === 'focus') return 'short break';
  return 'focus';
};

export const formatTimer = (time) => {
  let mins = Math.floor(time / 60);
  let sec = time - mins * 60;
  if (mins < 10) mins = `0${mins}`;
  if (sec < 10) sec = `0${sec}`;

  return `${mins}:${sec}`;
};
