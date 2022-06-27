import { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const initialState = {
  activePage: 'home',
  theme: 'light',
  lang: 'ru',
  appData: {
    clock: ['msc'],
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
