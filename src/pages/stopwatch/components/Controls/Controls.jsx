import Button from 'common/components/UI/Button';

import { ReactComponent as ResetSVG } from 'assets/icons/reset.svg';
import { ReactComponent as SplitSVG } from 'assets/icons/split.svg';
import { ReactComponent as PauseSVG } from 'assets/icons/pause.svg';

import useStopwatch from '../../hooks/useControlsStopwatch';

import styles from './Controls.module.scss';

const Controls = () => {
  const [info, startStopwatch, splitStopwatch, resetStopwatch] = useStopwatch();

  const primaryButton = (
    <Button
      primary
      onClick={startStopwatch}
      icon={info.isStart ? <PauseSVG /> : undefined}
      value={info.isStart ? 'pause' : undefined}
    />
  );

  return (
    <div className={styles.Controls}>
      <div className={styles.Controls__mainBtn}>
        {primaryButton}
      </div>
      <div className={styles.Controls__subControls}>
        <Button icon={<SplitSVG />} onClick={splitStopwatch} value="split" disabled={info.isReset} />
        <Button icon={<ResetSVG />} onClick={resetStopwatch} value="reset" disabled={info.isReset} />
      </div>
    </div>
  );
};

export default Controls;
