import Buttons from 'common/components/Buttons';

import { ReactComponent as ResetSVG } from 'assets/icons/reset.svg';
import { ReactComponent as SplitSVG } from 'assets/icons/split.svg';

import styles from './Controls.module.scss';

const Controls = () => (
  <div className={styles.Controls}>
    <Buttons isPrimary onClick={() => {}}>start</Buttons>
    <div className={styles.subControls}>
      <Buttons icon={<SplitSVG />} onClick={() => {}}>split</Buttons>
      <Buttons icon={<ResetSVG />} onClick={() => {}}>reset</Buttons>
    </div>
  </div>
);

export default Controls;
