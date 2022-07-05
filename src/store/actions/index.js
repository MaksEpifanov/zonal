import { addCityAction, deleteCityAction, changeActiveCityAction } from './clock';
import { startStopwatchAction, resetStopwatchAction, splitStopwatchAction } from './stopwatch';
import { startPomodoroAction, stopPomodoroAction, nextPomodoroAction } from './pomodoro';
import {
  addTodoAction, deleteTodoAction, addListAction, deleteListAction, completeTodoAction,
} from './todo';

const changeThemeAction = () => ({
  type: 'TOGGLE_THEME',
});

const changeLangAction = () => ({
  type: 'TOGGLE_LANG',
});

export {
  changeLangAction, changeThemeAction,
  addCityAction, deleteCityAction, changeActiveCityAction,
  startStopwatchAction, resetStopwatchAction, splitStopwatchAction,
  startPomodoroAction, stopPomodoroAction, nextPomodoroAction,
  addTodoAction, deleteTodoAction, addListAction, deleteListAction, completeTodoAction,
};
