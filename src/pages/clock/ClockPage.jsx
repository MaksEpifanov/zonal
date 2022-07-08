import { Clock, CitiesList } from 'pages/clock/components';

import styles from './ClockPage.module.scss';

const ClockPage = () => (
  <div className={styles.ClockPage}>
    <CitiesList />
    <Clock />
  </div>
);
export default ClockPage;
