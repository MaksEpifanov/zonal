import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { startStopwatchAction } from 'store/actions';

const useStopwatch = () => {
  const [{ stopwatch }, dispatch] = useContext(StoreContext);

  const startStopwatch = () => dispatch(startStopwatchAction());

  return [stopwatch.info, startStopwatch];
};

export default useStopwatch;
