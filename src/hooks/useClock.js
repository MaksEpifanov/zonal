import { useContext } from 'react';
import { StoreContext } from 'store/Store';
import { addCity, deleteCity } from 'store/actions';

const useClock = () => {
  const [{ appData: { cities } }, dispatch] = useContext(StoreContext);
  const activeCity = cities.filter((city) => city.active);

  const addClock = (city) => dispatch(addCity(city));
  const deleteClock = (id) => dispatch(deleteCity(id));

  return [activeCity, cities, addClock, deleteClock];
};

export default useClock;
