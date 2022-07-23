import { Controls, StopwatchDisplay } from './components';

import styles from './StopwatchPage.module.scss';

const StopwatchPage = () => (
  <div className={styles.StopwatchPage}>
    <Controls className={styles.StopwatchPage__controls} />
    <StopwatchDisplay className={styles.StopwatchPage__displays} />
  </div>
);

export default StopwatchPage;
