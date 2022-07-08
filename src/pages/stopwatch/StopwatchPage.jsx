import Controls from './components/Controls';
import StopwatchDisplay from './components/StopwatchDisplay';

import styles from './StopwatchPage.module.scss';

const StopwatchPage = () => (
  <div className={styles.StopwatchPage}>
    <div className={styles.controls}>
      <Controls />
    </div>
    <div className={styles.displays}>
      <StopwatchDisplay />
    </div>
  </div>
);

export default StopwatchPage;
