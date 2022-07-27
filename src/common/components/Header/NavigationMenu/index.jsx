import { useTranslation } from 'react-i18next';

import { ReactComponent as ClockSvg } from 'assets/icons/clock.svg';
import { ReactComponent as StopwatchSvg } from 'assets/icons/stopwatch.svg';
import { ReactComponent as PomodoroSvg } from 'assets/icons/pomodoro.svg';
import { ReactComponent as TodoSvg } from 'assets/icons/todo.svg';
import NavigationLink from '../NavigationLink';

import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'navigation' });
  return (
    <nav className={styles.NavigationMenu}>
      <ul className={styles.NavigationMenu__list}>
        <li className={styles.NavigationMenu__item}>
          <NavigationLink to="/">
            <ClockSvg className={styles.NavigationMenu__icon} />
            <span className={styles.NavigationMenu__text}>
              {t('clock')}
            </span>
          </NavigationLink>
        </li>
        <li className={styles.NavigationMenu__item}>
          <NavigationLink to="/stopwatch">
            <StopwatchSvg className={styles.NavigationMenu__icon} />
            <span className={styles.NavigationMenu__text}>
              {t('stopwatch')}
            </span>
          </NavigationLink>
        </li>
        <li className={styles.NavigationMenu__item}>
          <NavigationLink to="/pomodoro">
            <PomodoroSvg className={styles.NavigationMenu__icon} />
            <span className={styles.NavigationMenu__text}>
              {t('pomodoro')}
            </span>
          </NavigationLink>
        </li>
        <li className={styles.NavigationMenu__item}>
          <NavigationLink to="/todo">
            <TodoSvg className={styles.NavigationMenu__icon} />
            <span className={styles.NavigationMenu__text}>
              {t('todo')}
            </span>
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
