import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { changeThemeAction } from 'store/actions';

const useTheme = () => {
  const [{ theme }, dispatch] = useContext(StoreContext);

  const setTheme = () => {
    dispatch(changeThemeAction());
  };

  return [theme, setTheme];
};

export default useTheme;
