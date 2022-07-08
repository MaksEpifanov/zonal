import Buttons from 'common/components/Buttons';

import { ReactComponent as ResetSVG } from 'assets/icons/reset.svg';
import { ReactComponent as SplitSVG } from 'assets/icons/split.svg';

import styles from './Controls.module.scss';

const Controls = () => (
  <div className={styles.Controls}>
    <Buttons isPrimary>start</Buttons>
    <div className={styles.subControls}>
      <Buttons icon={<SplitSVG />}>split</Buttons>
      <Buttons icon={<ResetSVG />}>reset</Buttons>
    </div>
  </div>
);

export default Controls;
