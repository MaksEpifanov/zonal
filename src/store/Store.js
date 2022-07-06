import { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const initialState = {
  theme: 'light',
  lang: 'ru',
  clock: {
    activeCity: {
      id: 1, city: 'Moscow', timeZone: 3,
    },
    citiesList: [
      {
        id: 1, city: 'Moscow', timeZone: 3,
      },
      {
        id: 2, city: 'New York', timeZone: -4,
      },
      {
        id: 3, city: 'Tokyo', timeZone: 9,
      },
      {
        id: 4, city: 'London', timeZone: 1,
      },
      {
        id: 5, city: 'Los Angeles', timeZone: -7,
      },
      {
        id: 6, city: 'Samara', timeZone: 4,
      },
      {
        id: 7, city: 'Samara', timeZone: 4,
      },
      {
        id: 8, city: 'Samara', timeZone: 4,
      },

    ],
  },
  stopwatch: [
    { total: '0', lap: '0' },
  ],
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

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ([state, dispatch]), [state]);
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

export const StoreContext = createContext(initialState);
StoreContext.displayName = 'Store';

export default Store;

Store.propTypes = {
  children: PropTypes.element.isRequired,
};
