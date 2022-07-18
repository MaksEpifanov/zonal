import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { toggleTimerStatusAction, changeTimerModeAction } from 'store/actions';

const useControlPomodoro = () => {
  const [{ pomodoro }, dispatch] = useContext(StoreContext);

  const toggleTimerStatus = () => dispatch(toggleTimerStatusAction());
  const changeTimerMode = (mode) => dispatch(changeTimerModeAction(mode));

  return [pomodoro.status, pomodoro.lap, toggleTimerStatus, changeTimerMode];
};

export default useControlPomodoro;
