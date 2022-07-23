const clockReducer = (state, action) => {
  switch (action.type) {
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

export default clockReducer;
