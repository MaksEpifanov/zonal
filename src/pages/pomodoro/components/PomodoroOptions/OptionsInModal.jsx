import { ReactComponent as SoundSVG } from 'assets/icons/sound.svg';
import { ReactComponent as MuteSVG } from 'assets/icons/mute.svg';

import Button from 'common/components/UI/Button';
import NumberInput from 'common/components/UI/NumberInput';
import useSettingsPomodoro from 'pages/pomodoro/hooks/useSettingsPomodoro';

import styles from './PomodoroOptions.module.scss';

const OptionsInModal = () => {
  const [settings,
    changeFocusTime,
    changeShortTime,
    changeLongTime,
    toggleSound] = useSettingsPomodoro();

  const SoundButton = (
    <Button
      onClick={toggleSound}
      value={settings.sound ? 'sound on' : 'sound off'}
      icon={settings.sound ? <SoundSVG /> : <MuteSVG />}
    />
  );

  return (
    <div className={styles.PomodoroOptions__modal}>
      {SoundButton}
      <NumberInput max={60} min={5} value={+settings.timerFocus} type="Focus time" onChange={changeFocusTime} />
      <NumberInput max={20} min={1} value={+settings.timerShortBreak} type="Short break time" onChange={changeShortTime} />
      <NumberInput max={45} min={5} value={+settings.timerLongBreak} type="Long break time" onChange={changeLongTime} />
    </div>
  );
};

export default OptionsInModal;
