import { Buttons } from 'common/components';
import { Clock, CitiesList } from 'pages/clock/components';
import { ReactComponent as ResetSVG } from 'assets/icons/reset.svg';

import styles from './index.module.scss';

const ClockPage = () => (
  <div className={styles.ClockPage}>
    <div className={styles.cities}>
      <Buttons isPrimary onClick={() => {}}>ADD</Buttons>
      <Buttons icon={<ResetSVG />} onClick={() => {}}>ADD</Buttons>
      <CitiesList />
    </div>
    <Clock />
  </div>
);
export default ClockPage;
