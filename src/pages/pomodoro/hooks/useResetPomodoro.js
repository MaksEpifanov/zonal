import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { resetTimerAction } from 'store/actions/pomodoro';

const useResetPomodoro = () => {
  const [, dispatch] = useContext(StoreContext);

  const resetTimer = () => dispatch(resetTimerAction());

  return [resetTimer];
};

export default useResetPomodoro;
