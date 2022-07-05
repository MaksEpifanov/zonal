export const startStopwatchAction = () => ({
  type: 'START_STOPWATCH',
});

export const resetStopwatchAction = () => ({
  type: 'RESET_STOPWATCH',
});

export const splitStopwatchAction = (data) => ({
  type: 'SPLIT_STOPWATCH',
  payload: data,
});
