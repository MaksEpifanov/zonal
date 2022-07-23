import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import {
  changeSettingsFocusTimeAction,
  changeSettingsShortBreakTimeAction,
  changeSettingsLongBreakTimeAction,
  toggleSettingsSoundAction,
  resetTimerAction,
} from 'store/actions/pomodoro';

const useSettingsPomodoro = () => {
  const [{ pomodoro }, dispatch] = useContext(StoreContext);

  const changeFocusTime = (time) => {
    dispatch(changeSettingsFocusTimeAction(time));
    dispatch(resetTimerAction());
  };
  const changeShortBreakTime = (time) => {
    dispatch(changeSettingsShortBreakTimeAction(time));
    dispatch(resetTimerAction());
  };
  const changeLongBreakTime = (time) => {
    dispatch(changeSettingsLongBreakTimeAction(time));
    dispatch(resetTimerAction());
  };
  const toggleSound = () => dispatch(toggleSettingsSoundAction());

  return [pomodoro.settings,
    changeFocusTime,
    changeShortBreakTime,
    changeLongBreakTime,
    toggleSound];
};

export default useSettingsPomodoro;
