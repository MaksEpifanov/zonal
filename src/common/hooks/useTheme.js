import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { changeThemeAction } from 'store/actions';

const useTheme = () => {
  const [state, dispatch] = useContext(StoreContext);

  const setTheme = () => {
    dispatch(changeThemeAction());
  };

  return [state.common.theme, setTheme];
};

export default useTheme;
