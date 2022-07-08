import { useState } from 'react';

import useClock from 'pages/clock/hooks/useClock';
import Buttons from 'common/components/Buttons';
import Modal from 'common/components/Modal';
import { ReactComponent as AddSVG } from 'assets/icons/add.svg';
import AllCities from '../AllCities';

import styles from './CitiesList.module.scss';

const CitiesList = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const [cities, , deleteCity] = useClock();
  const [activeCity, setActiveCity] = useClock('active');

  const onViewModal = () => {
    setOpenModal((prevOpenModal) => !prevOpenModal);
  };

  const citiesList = cities.map((city) => (
    <Buttons
      key={city.id}
      isItem
      onClick={() => setActiveCity(city)}
      onDelete={() => deleteCity(city.id)}
      active={activeCity.id === city.id}
    >
      {city.city}
    </Buttons>
  ));

  return (
    <div className={styles.CitiesList}>
      <Buttons isPrimary icon={<AddSVG />} onClick={onViewModal}>add</Buttons>
      <div className={styles.cities}>
        {citiesList}
      </div>

      <Modal isOpen={isOpenModal} handleClose={onViewModal}><AllCities /></Modal>
    </div>
  );
};

export default CitiesList;
