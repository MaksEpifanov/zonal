import { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import rootReducer from './reducers';
import initialState from './initialState';

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(() => ([state, dispatch]), [state]);
  return (
    <StoreContext.Provider value={store}>
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
