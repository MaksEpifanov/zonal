import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { changeActiveListAction } from 'store/actions/todo';

const useActiveLists = () => {
  const [{ todo }, dispatch] = useContext(StoreContext);

  const changeActiveList = (id) => dispatch(changeActiveListAction(id));

  return [todo.activeList, changeActiveList];
};

export default useActiveLists;
