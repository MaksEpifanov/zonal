const pomodoroReducer = (state, action) => {
  switch (action.type) {
    case 'START_POMODORO': {
      return {
        ...state,
      };
    }
    default: return state;
  }
};

export default pomodoroReducer;
