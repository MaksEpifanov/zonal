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
    info: { isPause: false },
    time: { main: 0, sub: 0 },
    laps: [
      { id: 0, total: 0, lap: 0 },
    ],
  },
  pomodoro: {
    time: '25:00',
    isFocus: true,
    lap: 0,
  },
  todo: {
    lists: [
      { orderNum: 0, id: 0, name: 'All' },
    ],
    todos: [
      {
        orderNum: 0, idList: 0, id: 0, isCompleted: false, taks: 'Example todo',
      },
    ],
  },
};

export default initialState;
