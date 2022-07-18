import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import {
  changeSettingsFocusTimeAction,
  changeSettingsShortBreakTimeAction,
  changeSettingsLongBreakTimeAction,
  toggleSettingsSoundAction,
} from 'store/actions';

const useSettingsPomodoro = () => {
  const [{ pomodoro }, dispatch] = useContext(StoreContext);

  const changeFocusTime = () => dispatch(changeSettingsFocusTimeAction());
  const changeShortBreakTime = () => dispatch(changeSettingsShortBreakTimeAction());
  const changeLongBreakTime = () => dispatch(changeSettingsLongBreakTimeAction());
  const toggleSound = () => dispatch(toggleSettingsSoundAction());

  return [pomodoro.settings,
    changeFocusTime,
    changeShortBreakTime,
    changeLongBreakTime,
    toggleSound];
};

export default useSettingsPomodoro;
