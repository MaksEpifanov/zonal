const pomodoroReducer = (state, action) => {
  switch (action.type) {
    case 'COUNT_TIMER_POMODORO': {
      return {
        ...state,
        pomodoro: {
          ...state.pomodoro,
          timer: state.pomodoro.timer - 1,
        },
      };
    }
    case 'COUNT_LAP_POMODORO': {
      return {
        ...state,
        pomodoro: {
          ...state.pomodoro,
          lap: state.pomodoro.lap + 1,
        },
      };
    }
    case 'TOGGLE_TIMER_STATUS_POMODORO': {
      return {
        ...state,
        pomodoro: {
          ...state.pomodoro,
          status: {
            ...state.pomodoro.status,
            isTimerOn: !state.pomodoro.status.isTimerOn,
          },
        },
      };
    }
    case 'CHANGE_TIMER_MODE_POMODORO': {
      return {
        ...state,
        pomodoro: {
          ...state.pomodoro,
          status: {
            ...state.pomodoro.status,
            timerMode: action.payload,
          },
        },
      };
    }
    case 'CHANGE_SETTINGS_FOCUS_TIME': {
      return {
        ...state,
        pomodoro: {
          ...state.pomodoro,
          settings: {
            ...state.pomodoro.settings,
            timerFocus: action.payload,
          },
        },
      };
    }
    case 'CHANGE_SETTINGS_SHORT_BREAK': {
      return {
        ...state,
        pomodoro: {
          ...state.pomodoro,
          settings: {
            ...state.pomodoro.settings,
            timerShortBreak: action.payload,
          },
        },
      };
    }
    case 'CHANGE_SETTINGS_LONG_BREAK': {
      return {
        ...state,
        pomodoro: {
          ...state.pomodoro,
          settings: {
            ...state.pomodoro.settings,
            timerLongBreak: action.payload,
          },
        },
      };
    }
    case 'TOGGLE_SETTINGS_SOUND': {
      return {
        ...state,
        pomodoro: {
          ...state.pomodoro,
          settings: {
            ...state.pomodoro.settings,
            sound: !state.pomodoro.settings.sound,
          },
        },
      };
    }
    case 'RESET_TIMER': {
      switch (state.pomodoro.status.timerMode) {
        case 'focus': {
          return {
            ...state,
            pomodoro: {
              ...state.pomodoro,
              timer: state.pomodoro.settings.timerFocus * 60,
            },
          };
        }
        case 'short break': {
          return {
            ...state,
            pomodoro: {
              ...state.pomodoro,
              timer: state.pomodoro.settings.timerShortBreak * 60,
            },
          };
        }
        case 'long break': {
          return {
            ...state,
            pomodoro: {
              ...state.pomodoro,
              timer: state.pomodoro.settings.timerLongBreak * 60,
            },
          };
        }
        default: return state;
      }
    }
    default: return state;
  }
};

export default pomodoroReducer;
