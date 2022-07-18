import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { toggleTimerStatusAction, changeTimerModeAction } from 'store/actions';

const useControlPomodoro = () => {
  const [{ pomodoro: status }, dispatch] = useContext(StoreContext);

  const toggleTimerStatus = () => dispatch(toggleTimerStatusAction());
  const changeTimerMode = () => dispatch(changeTimerModeAction());

  return [status, toggleTimerStatus, changeTimerMode];
};

export default useControlPomodoro;
