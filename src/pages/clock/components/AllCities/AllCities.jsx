import Buttons from 'common/components/Buttons';
import { ReactComponent as AddSVG } from 'assets/icons/add.svg';
import useClock from 'pages/clock/hooks/useClock';
import allCities from 'services/allCities/citiesList';

const AllCities = () => {
  const [cities, addCity] = useClock();
  const citiesIds = cities.map((city) => city.id);
  const notAddedCity = allCities.filter((city) => !citiesIds.includes(city.id));

  return notAddedCity.map((city) => (
    <Buttons
      isNoResponsive
      icon={<AddSVG />}
      onClick={() => addCity(city)}
      key={city.id}
    >
      {city.city}
    </Buttons>
  ));
};

export default AllCities;
