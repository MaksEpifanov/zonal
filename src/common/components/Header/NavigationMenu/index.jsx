import { ReactComponent as ClockSvg } from 'assets/icons/clock.svg';
import { ReactComponent as StopwatchSvg } from 'assets/icons/stopwatch.svg';
import { ReactComponent as PomodoroSvg } from 'assets/icons/pomodoro.svg';
import { ReactComponent as TodoSvg } from 'assets/icons/todo.svg';
import NavigationLink from '../NavigationLink';

import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => (
  <nav className={styles.NavigationMenu}>
    <ul className={styles.NavigationMenu__list}>
      <li className={styles.NavigationMenu__item}>
        <NavigationLink to="/">
          <ClockSvg className={styles.NavigationMenu__icon} />
          <span className={styles.NavigationMenu__text}>
            Clock
          </span>
        </NavigationLink>
      </li>
      <li className={styles.NavigationMenu__item}>
        <NavigationLink to="/stopwatch">
          <StopwatchSvg className={styles.NavigationMenu__icon} />
          <span className={styles.NavigationMenu__text}>
            Stopwatch
          </span>
        </NavigationLink>
      </li>
      <li className={styles.NavigationMenu__item}>
        <NavigationLink to="/pomodoro">
          <PomodoroSvg className={styles.NavigationMenu__icon} />
          <span className={styles.NavigationMenu__text}>
            Pomodoro
          </span>
        </NavigationLink>
      </li>
      <li className={styles.NavigationMenu__item}>
        <NavigationLink to="/todo">
          <TodoSvg className={styles.NavigationMenu__icon} />
          <span className={styles.NavigationMenu__text}>
            To Do
          </span>
        </NavigationLink>
      </li>
    </ul>
  </nav>
);

export default NavigationMenu;
