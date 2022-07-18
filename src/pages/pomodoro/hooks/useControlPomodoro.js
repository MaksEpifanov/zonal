import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { toggleTimerStatusAction, changeTimerModeAction, resetTimerAction } from 'store/actions';

const useControlPomodoro = () => {
  const [{ pomodoro }, dispatch] = useContext(StoreContext);

  const toggleTimerStatus = () => dispatch(toggleTimerStatusAction());
  const changeTimerMode = (mode) => dispatch(changeTimerModeAction(mode));
  const resetTimer = () => dispatch(resetTimerAction());

  return [pomodoro.status, pomodoro.lap, toggleTimerStatus, changeTimerMode, resetTimer];
};

export default useControlPomodoro;
