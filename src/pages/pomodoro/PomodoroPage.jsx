import { ProgressBar, PomodoroControls, PomodoroDisplay } from './components';

import styles from './PomodoroPage.module.scss';

const PomodoroPage = () => (
  <div className={styles.PomodoroPage}>
    <ProgressBar className={styles.PomodoroPage__progress} />
    <PomodoroDisplay className={styles.PomodoroPage__displays} />
    <PomodoroControls className={styles.PomodoroPage__controls} />
  </div>
);

export default PomodoroPage;
