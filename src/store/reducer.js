const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    }
    case 'TOGGLE_LANG': {
      return {
        ...state,
        lang: state.lang === 'ru' ? 'en' : 'ru',
      };
    }
    default: return state;
  }
};

export default reducer;
