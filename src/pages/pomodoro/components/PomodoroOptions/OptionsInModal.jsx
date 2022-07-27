import { useTranslation } from 'react-i18next';
import { ReactComponent as SoundSVG } from 'assets/icons/sound.svg';
import { ReactComponent as MuteSVG } from 'assets/icons/mute.svg';
import { ReactComponent as ResetSVG } from 'assets/icons/reset.svg';

import { useSettingsPomodoro, useResetPomodoro } from 'pages/pomodoro/hooks';

import Button from 'common/components/UI/Button';
import NumberInput from 'common/components/UI/NumberInput';

import styles from './PomodoroOptions.module.scss';

const OptionsInModal = () => {
  const [settings,
    changeFocusTime,
    changeShortTime,
    changeLongTime,
    toggleSound] = useSettingsPomodoro();

  const [resetTimer] = useResetPomodoro();
  const { t } = useTranslation();

  const SoundButton = (
    <Button
      onClick={toggleSound}
      value={settings.sound ? t('buttons.sound_on') : t('buttons.sound_off')}
      icon={settings.sound ? <SoundSVG /> : <MuteSVG />}
    />
  );

  return (
    <div className={styles.PomodoroOptions__modal}>
      <div className={styles.PomodoroOptions__controls}>
        {SoundButton}
        <Button value={t('buttons.reset')} icon={<ResetSVG />} onClick={resetTimer} />
      </div>
      <NumberInput max={60} min={5} value={+settings.timerFocus} type={`${t('pomodoro.time_to')} ${t('pomodoro.focus')}`} onChange={changeFocusTime} />
      <NumberInput max={20} min={1} value={+settings.timerShortBreak} type={t('pomodoro.short_break')} onChange={changeShortTime} />
      <NumberInput max={45} min={5} value={+settings.timerLongBreak} type={t('pomodoro.long_break')} onChange={changeLongTime} />
    </div>
  );
};

export default OptionsInModal;
