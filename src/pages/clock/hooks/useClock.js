import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { addCityAction, deleteCityAction, changeActiveCityAction } from 'store/actions';

const useClock = (type) => {
  const [{ clock }, dispatch] = useContext(StoreContext);

  const addTimeZone = (city) => dispatch(addCityAction(city));
  const deleteTimeZone = (id) => dispatch(deleteCityAction(id));

  const setActiveCity = (city) => dispatch(changeActiveCityAction(city));
  if (type === 'active') return [clock.activeCity, setActiveCity];
  return [clock.citiesList, addTimeZone, deleteTimeZone];
};

export default useClock;
