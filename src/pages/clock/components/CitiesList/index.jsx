import useClock from 'pages/clock/hooks/useClock';
import Button from 'common/components/UI/Button';

import styles from './CitiesList.module.scss';

const CitiesList = () => {
  const [cities, , deleteCity] = useClock();
  const [activeCity, setActiveCity] = useClock('active');

  const citiesList = cities.map((city) => (
    <Button
      key={city.id}
      item
      onClick={() => setActiveCity(city)}
      onDelete={() => deleteCity(city.id)}
      active={activeCity.id === city.id}
      value={city.city}
    />
  ));

  return (
    <div className={styles.CitiesList}>
      {citiesList}
    </div>
  );
};

export default CitiesList;
