import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { changeTheme } from 'store/actions';

const useTheme = () => {
  const [{ theme }, dispatch] = useContext(StoreContext);

  const setTheme = () => {
    dispatch(changeTheme());
  };

  return [theme, setTheme];
};

export default useTheme;
