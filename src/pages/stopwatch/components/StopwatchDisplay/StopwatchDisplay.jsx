import Displays from 'common/components/Displays';
import Tables from 'common/components/Tables';
import styles from './StopwatchDisplay.module.scss';

const timers = '00:00:02.033';

const StopwatchDisplay = () => (
  <div className={styles.StopwatchDisplay}>
    <div className={styles.timers}>
      <Displays>{timers}</Displays>
      <div className={styles.timers__second}>
        <Displays isActive>{timers}</Displays>
      </div>
    </div>
    <div className={styles.tables}>
      <Tables />
    </div>
  </div>
);

export default StopwatchDisplay;
