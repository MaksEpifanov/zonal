import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { startStopwatchAction, splitStopwatchAction, resetStopwatchAction } from 'store/actions';

const useControlsStopwatch = () => {
  const [{ stopwatch }, dispatch] = useContext(StoreContext);

  const startStopwatch = () => dispatch(startStopwatchAction());
  const splitStopwatch = () => dispatch(splitStopwatchAction());
  const resetStopwatch = () => dispatch(resetStopwatchAction());

  return [stopwatch.info, startStopwatch, splitStopwatch, resetStopwatch];
};

export default useControlsStopwatch;
