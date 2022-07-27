const initialState = {
  common: {
    theme: 'light',
    lang: 'ru',
  },
  clock: {
    activeCity: {
      id: 1, city: 'Moscow', timeZone: 3,
    },
    citiesList: [
      {
        id: 1, city: 'Moscow', timeZone: 3,
      },
    ],
  },
  stopwatch: {
    info: { isStart: false, isReset: true },
    time: { main: { ms: 0, sec: 0, min: 0 }, lap: { ms: 0, sec: 0, min: 0 } },
    laps: [],
  },
  pomodoro: {
    timer: 25 * 60,
    lap: 0,
    status: {
      isTimerOn: false,
      timerMode: 'focus',
    },
    settings: {
      timerFocus: 25,
      timerShortBreak: 5,
      timerLongBreak: 15,
      sound: true,
    },
  },
  todo: {
    activeList: 0,
    lists: [
      {
        id: 0, name: 'all',
      },
      { id: 1, name: 'home' },
      { id: 2, name: 'work' },
    ],
    todos: [
      {
        idList: 0, id: 0, isCompleted: false, task: 'Example todo',
      },
    ],
  },
};

export default initialState;
