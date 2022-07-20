import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import {
  addListAction,
  deleteListAction,
} from 'store/actions';

const useControlsStopwatch = () => {
  const [{ todo }, dispatch] = useContext(StoreContext);

  const addList = (list) => dispatch(addListAction(list));
  const deleteList = (id) => dispatch(deleteListAction(id));

  return [todo.lists, todo.activeList, addList, deleteList];
};

export default useControlsStopwatch;
