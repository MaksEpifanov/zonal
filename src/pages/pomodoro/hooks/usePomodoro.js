import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { startPomodoroAction, nextPomodoroAction } from 'store/actions';

const usePomodoro = (type) => {
  const [{ pomodoro }, dispatch] = useContext(StoreContext);

  const startPomodoro = () => dispatch(startPomodoroAction());
  const nextPomodoro = () => dispatch(nextPomodoroAction());

  return [clock.citiesList, addTimeZone, deleteTimeZone];
};

export default usePomodoro;
