import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import Button from 'common/components/UI/Button';
import { ReactComponent as NextSVG } from 'assets/icons/next.svg';
import { ReactComponent as PauseSVG } from 'assets/icons/pause.svg';
import { ReactComponent as SoundSVG } from 'assets/icons/sound.svg';
import { ReactComponent as MuteSVG } from 'assets/icons/mute.svg';
import { ReactComponent as OptionsSVG } from 'assets/icons/options.svg';

import useSettingsPomodoro from 'pages/pomodoro/hooks/useSettingsPomodoro';
import useControlPomodoro from 'pages/pomodoro/hooks/useControlPomodoro';
import { getMode } from 'pages/pomodoro/utils/index';

import styles from './PomodoroControls.module.scss';

const cx = classNamesBind.bind(styles);

const PomodoroControls = ({ className }) => {
  const classNames = cx({
    PomodoroControls,
    [className]: !!className,
  });

  const [status, lap, toggleTimerStatus, changeTimerMode, resetTimer] = useControlPomodoro();
  const [settings, , , , toggleSound] = useSettingsPomodoro();

  const setMode = () => {
    const timerMode = getMode(status.timerMode, lap);
    changeTimerMode(timerMode);
    resetTimer();
  };

  const PrimaryButton = (
    <Button
      primary
      onClick={toggleTimerStatus}
      icon={status.isTimerOn ? <PauseSVG /> : undefined}
      value={status.isTimerOn ? 'pause' : undefined}
    />
  );

  const SoundButton = (
    <Button
      onClick={toggleSound}
      value={settings.sound ? 'sound on' : 'sound off'}
      icon={settings.sound ? <SoundSVG /> : <MuteSVG />}
    />
  );

  return (
    <div className={classNames}>
      <div className={styles.PomodoroControls__upBtns}>
        <div className={styles.PomodoroControls__mainBtn}>
          {PrimaryButton}
        </div>
        <Button icon={<NextSVG />} value="next" onClick={setMode} />
      </div>
      <div className={styles.PomodoroControls__downBtns}>
        <Button value="Options" icon={<OptionsSVG />} disabled={status.isTimerOn} />
        {SoundButton}
      </div>
    </div>
  );
};

export default PomodoroControls;

PomodoroControls.propTypes = {
  className: PropTypes.string,
};

PomodoroControls.defaultProps = {
  className: '',
};
