import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { toggleTimerStatusAction, changeTimerModeAction } from 'store/actions/pomodoro';

const useStatusPomodoro = () => {
  const [{ pomodoro }, dispatch] = useContext(StoreContext);

  const toggleTimerStatus = () => dispatch(toggleTimerStatusAction());
  const changeTimerMode = (mode) => dispatch(changeTimerModeAction(mode));

  return [pomodoro.status, toggleTimerStatus, changeTimerMode];
};

export default useStatusPomodoro;
