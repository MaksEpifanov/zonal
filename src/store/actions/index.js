import { addCity, deleteCity } from './clock';
import { startStopwatch, resetStopwatch, splitStopwatch } from './stopwatch';
import { startPomodoro, stopPomodoro, nextPomodoro } from './pomodoro';
import {
  addTodo, deleteTodo, addList, deleteList, completeTodo,
} from './todo';

const changeTheme = () => ({
  type: 'TOGGLE_THEME',
});

const changeLang = () => ({
  type: 'TOGGLE_LANG',
});

export {
  changeLang, changeTheme,
  addCity, deleteCity,
  startStopwatch, resetStopwatch, splitStopwatch,
  startPomodoro, stopPomodoro, nextPomodoro,
  addTodo, deleteTodo, addList, deleteList, completeTodo,
};
