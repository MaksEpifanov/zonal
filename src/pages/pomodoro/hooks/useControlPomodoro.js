import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { countTimerAction, countLapAction } from 'store/actions/pomodoro';

const useControlPomodoro = () => {
  const [{ pomodoro }, dispatch] = useContext(StoreContext);

  const countTimer = () => dispatch(countTimerAction());
  const countLap = () => dispatch(countLapAction());

  return [pomodoro.timer, pomodoro.lap, countTimer, countLap];
};

export default useControlPomodoro;
