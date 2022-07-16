export const startStopwatchAction = () => ({
  type: 'START_STOPWATCH',
});

export const resetStopwatchAction = () => ({
  type: 'RESET_STOPWATCH',
});

export const splitStopwatchAction = () => ({
  type: 'SPLIT_STOPWATCH',
});

export const changeStopwatchAction = (time) => ({
  type: 'CHANGE_STOPWATCH',
  payload: time,
});
