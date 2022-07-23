const stopwatchReducer = (state, action) => {
  switch (action.type) {
    case 'START_STOPWATCH': {
      return {
        ...state,
        stopwatch: {
          ...state.stopwatch,
          info: {
            ...state.stopwatch.info,
            isStart: state.stopwatch.info.isStart === false,
            isReset: false,
          },
        },
      };
    }

    case 'SPLIT_STOPWATCH': {
      return {
        ...state,
        stopwatch: {
          ...state.stopwatch,
          laps: [...state.stopwatch.laps,
            {
              id: state.stopwatch.laps.length - 1 + 1,
              total: state.stopwatch.time.main,
              lap: state.stopwatch.time.lap,
            },
          ],
          time: {
            ...state.stopwatch.time,
            lap: { ms: 0, sec: 0, min: 0 },
          },
        },
      };
    }

    case 'CHANGE_STOPWATCH': {
      return {
        ...state,
        stopwatch: {
          ...state.stopwatch,
          time: action.payload,
        },
      };
    }

    case 'RESET_STOPWATCH': {
      return {
        ...state,
        stopwatch: {
          info: {
            ...state.stopwatch.info,
            isStart: false,
            isReset: true,
          },
          time: { main: { ms: 0, sec: 0, min: 0 }, lap: { ms: 0, sec: 0, min: 0 } },
          laps: [],
        },
      };
    }

    default: return state;
  }
};

export default stopwatchReducer;
