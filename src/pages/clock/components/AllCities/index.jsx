import Button from 'common/components/UI/Button';
import { ReactComponent as AddSVG } from 'assets/icons/add.svg';
import useClock from 'pages/clock/hooks/useClock';
import allCities from 'services/allCities/citiesList';

import styles from './AllCities.module.scss';

const AllCities = () => {
  const [cities, addCity] = useClock();
  const citiesIds = cities.map((city) => city.id);
  const notAddedCity = allCities.filter((city) => !citiesIds.includes(city.id));

  const notAddedCityLabel = notAddedCity.map((city) => (
    <Button
      key={city.id}
      noResponse
      icon={<AddSVG />}
      onClick={() => addCity(city)}
      value={city.city}
    />
  ));

  return (
    <div className={styles.AllCities}>
      {notAddedCityLabel}
    </div>
  );
};

export default AllCities;
