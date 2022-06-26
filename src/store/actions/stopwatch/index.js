export const startStopwatch = () => ({
  type: 'START_STOPWATCH',
});

export const resetStopwatch = () => ({
  type: 'RESET_STOPWATCH',
});

export const splitStopwatch = (data) => ({
  type: 'SPLIT_STOPWATCH',
  payload: data,
});
