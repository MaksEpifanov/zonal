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

export const formatTimeToPercent = (timer, timerInSettings, mode) => {
  let maxTimer;
  if (mode === 'short break') maxTimer = timerInSettings.timerShortBreak * 60;
  if (mode === 'long break') maxTimer = timerInSettings.timerLongBreak * 60;
  if (mode === 'focus') maxTimer = timerInSettings.timerFocus * 60;

  const resultPercent = (+timer / (+maxTimer / 100)).toFixed(1);
  return `${resultPercent}%`;
};
