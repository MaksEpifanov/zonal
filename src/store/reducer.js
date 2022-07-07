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
    case 'CHANGE_ACTIVE_CITY': {
      return {
        ...state,
        clock: {
          ...state.clock,
          activeCity: action.payload,
        },
      };
    }
    case 'ADD_CITY': {
      return {
        ...state,
        clock: {
          ...state.clock,
          citiesList: [...state.clock.citiesList, action.payload],
        },
      };
    }
    case 'DELETE_CITY': {
      return {
        ...state,
        clock: {
          ...state.clock,
          citiesList: state.clock.citiesList.filter((city) => city.id !== action.payload),
        },
      };
    }
    default: return state;
  }
};

export default reducer;
