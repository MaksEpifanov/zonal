import useClock from 'pages/clock/hooks/useClock';

import { Buttons } from 'common/components';

import styles from './CitiesList.module.scss';

// const addCitiesList = [
//   { id: 1, city: 'Moscow', timeZone: '+3' },
//   { id: 2, city: 'Novosibirsk', timeZone: '+7' },
//   { id: 3, city: 'New York', timeZone: '-4' },
//   { id: 4, city: 'Tokyo', timeZone: '+9' },
// ];

const CitiesList = () => {
  const [cities, , deleteCity] = useClock();
  const [activeCity, setActiveCity] = useClock('active');

  const citiesList = cities.map((city) => (
    <Buttons
      key={city.id}
      isItem
      onClick={() => setActiveCity(city)}
      onDelete={() => deleteCity(city.id)}
      active={activeCity.id === city.id}
    >
      {city.city.toUpperCase()}
    </Buttons>
  ));

  return (
    <div className={styles.CitiesList}>
      {citiesList}
    </div>
  );
};

export default CitiesList;
