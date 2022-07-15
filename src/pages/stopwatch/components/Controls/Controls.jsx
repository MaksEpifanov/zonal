import Button from 'common/components/UI/Button';

import { ReactComponent as ResetSVG } from 'assets/icons/reset.svg';
import { ReactComponent as SplitSVG } from 'assets/icons/split.svg';

import useStopwatch from '../../hooks/useControlsStopwatch';

import styles from './Controls.module.scss';

const Controls = () => {
  const [info, startStopwatch] = useStopwatch();
  return (
    <div className={styles.Controls}>
      <div className={styles.Controls__mainBtn}>
        <Button primary onClick={startStopwatch} />
      </div>
      <div className={styles.Controls__subControls}>
        <Button icon={<SplitSVG />} onClick={() => {}} value="split" />
        <Button icon={<ResetSVG />} onClick={() => {}} value="reset" />
      </div>
    </div>
  );
};

export default Controls;
