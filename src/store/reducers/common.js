const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        common: {
          ...state.common,
          theme: state.common.theme === 'light' ? 'dark' : 'light',
        },
      };
    }
    case 'TOGGLE_LANG': {
      return {
        ...state,
        lang: state.common.lang === 'ru' ? 'en' : 'ru',
      };
    }
    default: return state;
  }
};

export default reducer;
