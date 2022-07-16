import { useContext, useCallback } from 'react';
import { StoreContext } from 'store/Store';
import { changeStopwatchAction } from 'store/actions';

const useDisplayStopwatch = () => {
  const [{ stopwatch }, dispatch] = useContext(StoreContext);

  const changeStopwatch = useCallback(
    (time) => dispatch(changeStopwatchAction(time)),
    [dispatch],
  );

  return [stopwatch.info, stopwatch.time, stopwatch.laps, changeStopwatch];
};

export default useDisplayStopwatch;
