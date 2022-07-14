import Displays from 'common/components/UI/Displays';
import Tables from 'common/components/UI/Tables';
import styles from './StopwatchDisplay.module.scss';

const columns = [
  { title: '№' },
  { title: 'Interval' },
  { title: 'Total' },
];

const data = [
  { id: 1, interval: '00:00:02.033', total: '00:00:02.033' },
  { id: 2, interval: '00:00:02.033', total: '00:00:02.033' },
  { id: 3, interval: '00:00:02.033', total: '00:00:02.033' },
  { id: 4, interval: '00:00:02.033', total: '00:00:02.033' },
];

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
      <Tables columns={columns} data={data} />
    </div>
  </div>
);

export default StopwatchDisplay;
