import { ReactComponent as NextSVG } from 'assets/icons/next.svg';

import Display from 'common/components/UI/Displays';
import Button from 'common/components/UI/Button';
import ProgressBar from './components/ProgressBar';

import styles from './PomodoroPage.module.scss';

const timer = '25:00';
const status = 'Time to focus';
const count = 2;

const PomodoroPage = () => (
  <div className={styles.PomodoroPage}>
    <ProgressBar max={25} value={17} className={styles.progress} />
    <div className={styles.displays}>
      <Display>{timer}</Display>
      <div className={styles.displays__sub}>
        <Display isActive>{status}</Display>
        <Display>{count}</Display>
      </div>
    </div>
    <div className={styles.controls}>
      <div className={styles.controls__mainBtn}>
        <Button primary />
      </div>
      <Button icon={<NextSVG />} value="next" />
    </div>
  </div>
);

export default PomodoroPage;
