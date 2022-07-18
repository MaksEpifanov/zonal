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

export const getMaxTime = (mode, timerInSettings) => {
  if (mode === 'short break') return timerInSettings.timerShortBreak * 60;
  if (mode === 'long break') return timerInSettings.timerLongBreak * 60;
  return timerInSettings.timerFocus * 60;
};
