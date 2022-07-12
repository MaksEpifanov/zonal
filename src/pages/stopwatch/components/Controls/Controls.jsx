import Button from 'common/components/Button';

import { ReactComponent as ResetSVG } from 'assets/icons/reset.svg';
import { ReactComponent as SplitSVG } from 'assets/icons/split.svg';

import styles from './Controls.module.scss';

const Controls = () => (
  <div className={styles.Controls}>
    <div className={styles.Controls__mainBtn}>
      <Button primary onClick={() => {}} />
    </div>
    <div className={styles.Controls__subControls}>
      <Button icon={<SplitSVG />} onClick={() => {}} value="split" />
      <Button icon={<ResetSVG />} onClick={() => {}} value="reset" />
    </div>
  </div>
);

export default Controls;
