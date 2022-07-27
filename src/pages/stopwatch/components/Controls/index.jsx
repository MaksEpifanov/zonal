import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import Button from 'common/components/UI/Button';
import { ReactComponent as ResetSVG } from 'assets/icons/reset.svg';
import { ReactComponent as SplitSVG } from 'assets/icons/split.svg';
import { ReactComponent as PauseSVG } from 'assets/icons/pause.svg';

import { useControlsStopwatch } from 'pages/stopwatch/hooks';

import styles from './Controls.module.scss';

const cx = classNamesBind.bind(styles);

const Controls = ({ className }) => {
  const classNames = cx({
    Controls,
    [className]: !!className,
  });

  const { t } = useTranslation();
  const [info, startStopwatch, splitStopwatch, resetStopwatch] = useControlsStopwatch();

  const primaryButton = (
    <Button
      primary
      onClick={startStopwatch}
      icon={info.isStart ? <PauseSVG /> : undefined}
      value={info.isStart ? t('buttons.pause') : undefined}
    />
  );

  return (
    <div className={classNames}>
      <div className={styles.Controls__mainBtn}>
        {primaryButton}
      </div>
      <div className={styles.Controls__subControls}>
        <Button icon={<SplitSVG />} onClick={splitStopwatch} value={t('buttons.split')} disabled={info.isReset} />
        <Button icon={<ResetSVG />} onClick={resetStopwatch} value={t('buttons.reset')} disabled={info.isReset} />
      </div>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  className: PropTypes.string,
};

Controls.defaultProps = {
  className: '',
};
