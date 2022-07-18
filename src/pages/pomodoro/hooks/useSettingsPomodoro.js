import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import {
  changeSettingsFocusTimeAction,
  changeSettingsShortBreakTimeAction,
  changeSettingsLongBreakTimeAction,
  toggleSettingsSoundAction,
} from 'store/actions';

const useSettingsPomodoro = () => {
  const [{ pomodoro: settings }, dispatch] = useContext(StoreContext);

  const changeFocusTime = () => dispatch(changeSettingsFocusTimeAction());
  const changeShortBreakTime = () => dispatch(changeSettingsShortBreakTimeAction());
  const changeLongBreakTime = () => dispatch(changeSettingsLongBreakTimeAction());
  const toggleSound = () => dispatch(toggleSettingsSoundAction());

  return [settings, changeFocusTime, changeShortBreakTime, changeLongBreakTime, toggleSound];
};

export default useSettingsPomodoro;
