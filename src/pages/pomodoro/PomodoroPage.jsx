import ProgressBar from './components/ProgressBar';
import PomodoroControls from './components/PomodoroControls';
import PomodoroDisplay from './components/PomodoroDisplay';

import styles from './PomodoroPage.module.scss';

const PomodoroPage = () => (
  <div className={styles.PomodoroPage}>
    <ProgressBar max={25} value={17} className={styles.PomodoroPage__progress} />
    <PomodoroDisplay className={styles.PomodoroPage__displays} />
    <PomodoroControls className={styles.PomodoroPage__controls} />
  </div>
);

export default PomodoroPage;
