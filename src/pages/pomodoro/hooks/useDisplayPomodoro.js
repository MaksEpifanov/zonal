import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import {
  countTimerAction, countLapAction, changeTimerModeAction, resetTimerAction,
} from 'store/actions';

const useDisplayPomodoro = () => {
  const [{ pomodoro }, dispatch] = useContext(StoreContext);

  const countTimer = () => dispatch(countTimerAction());
  const countLap = () => dispatch(countLapAction());
  const changeTimerMode = () => dispatch(changeTimerModeAction());
  const resetTimer = () => dispatch(resetTimerAction());

  return [pomodoro.timer, pomodoro.lap, countTimer, countLap, changeTimerMode, resetTimer];
};

export default useDisplayPomodoro;
