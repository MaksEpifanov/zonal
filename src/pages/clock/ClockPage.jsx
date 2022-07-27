import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Clock, CitiesList, AllCities } from 'pages/clock/components';
import { ReactComponent as AddSVG } from 'assets/icons/add.svg';
import Button from 'common/components/UI/Button';
import Modal from 'common/components/UI/Modal';

import styles from './ClockPage.module.scss';

const ClockPage = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const { t } = useTranslation('translation', { keyPrefix: 'buttons' });

  const onViewModal = () => setOpenModal((prevOpenModal) => !prevOpenModal);

  return (
    <div className={styles.ClockPage}>
      <div className={styles.ClockPage__left}>
        <div className={styles.ClockPage__mainBtn}>
          <Button primary icon={<AddSVG />} onClick={onViewModal} value={t('add')} />
        </div>
        <CitiesList />
      </div>
      <Clock />
      <Modal isOpen={isOpenModal} handleClose={onViewModal}><AllCities /></Modal>
    </div>
  );
};
export default ClockPage;
