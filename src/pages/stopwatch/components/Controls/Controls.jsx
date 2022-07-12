import Button from 'common/components/Button';

import { ReactComponent as ResetSVG } from 'assets/icons/reset.svg';
import { ReactComponent as SplitSVG } from 'assets/icons/split.svg';

import styles from './Controls.module.scss';

const Controls = () => (
  <div className={styles.Controls}>
    <Button primary onClick={() => {}}>start</Button>
    <div className={styles.subControls}>
      <Button icon={<SplitSVG />} onClick={() => {}}>split</Button>
      <Button icon={<ResetSVG />} onClick={() => {}}>reset</Button>
    </div>
  </div>
);

export default Controls;
