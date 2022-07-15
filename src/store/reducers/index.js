import clockReducer from './clock';
import commonReducer from './common';
import stopwatchReducer from './stopwatch';
import pomodoroReducer from './pomodoro';
import todoReducer from './todo';

const combineReducers = (reducers) => (state, action) => Object.keys(reducers).reduce(
  (acc, prop) => ({
    ...acc,
    ...reducers[prop]({ [prop]: acc[prop] }, action),
  }),
  state,
);

const rootReducer = combineReducers({
  common: commonReducer,
  clock: clockReducer,
  stopwatch: stopwatchReducer,
  pomodoro: pomodoroReducer,
  todo: todoReducer,
});

export default rootReducer;
