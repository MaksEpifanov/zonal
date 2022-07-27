import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { changeLangAction } from 'store/actions';

const useTheme = () => {
  const [state, dispatch] = useContext(StoreContext);

  const setLang = () => {
    dispatch(changeLangAction());
  };

  return [state.common.lang, setLang];
};

export default useTheme;
