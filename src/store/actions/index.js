import { addCityAction, deleteCityAction, changeActiveCityAction } from './clock';

import {
  startStopwatchAction, resetStopwatchAction, splitStopwatchAction, changeStopwatchAction,
} from './stopwatch';

import {
  countTimerAction,
  countLapAction,
  toggleTimerStatusAction,
  changeTimerModeAction,
  changeSettingsFocusTimeAction,
  changeSettingsShortBreakTimeAction,
  changeSettingsLongBreakTimeAction,
  toggleSettingsSoundAction,
  resetTimerAction,
} from './pomodoro';

import {
  addTodoAction,
  deleteTodoAction,
  changeActiveListAction,
  addListAction, deleteListAction,
  completeTodoAction,
} from './todo';

const changeThemeAction = () => ({
  type: 'TOGGLE_THEME',
});

const changeLangAction = () => ({
  type: 'TOGGLE_LANG',
});

export {
  // common actions
  changeLangAction, changeThemeAction,

  // clock actions
  addCityAction, deleteCityAction, changeActiveCityAction,

  // stopwatch actions
  startStopwatchAction, resetStopwatchAction, splitStopwatchAction, changeStopwatchAction,

  // pomodoro actions
  countTimerAction, countLapAction, toggleTimerStatusAction, changeTimerModeAction,
  changeSettingsFocusTimeAction, changeSettingsShortBreakTimeAction,
  changeSettingsLongBreakTimeAction, toggleSettingsSoundAction, resetTimerAction,

  // todo actions
  addTodoAction, deleteTodoAction, completeTodoAction,
  addListAction, deleteListAction, changeActiveListAction,
};
