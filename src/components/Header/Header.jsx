import { ReactComponent as ClockSvg } from 'assets/icons/clock.svg';
import { ReactComponent as StopwatchSvg } from 'assets/icons/stopwatch.svg';
import { ReactComponent as PomodoroSvg } from 'assets/icons/pomodoro.svg';
import { ReactComponent as TodoSvg } from 'assets/icons/todo.svg';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';
import NavigationLink from './NavigationLink';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.Header}>
    <Logo />
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <NavigationLink to="/">
          <ClockSvg className={style.nav__icon} />
          <span className={style.nav__text}>
            Clock
          </span>
        </NavigationLink>
        <NavigationLink to="/stopwatch">
          <StopwatchSvg className={style.nav__icon} />
          <span className={style.nav__text}>
            Stopwatch
          </span>
        </NavigationLink>
        <NavigationLink to="/pomodoro">
          <PomodoroSvg className={style.nav__icon} />
          <span className={style.nav__text}>
            Pomodoro
          </span>
        </NavigationLink>
        <NavigationLink to="/todo">
          <TodoSvg className={style.nav__icon} />
          <span className={style.nav__text}>
            To Do
          </span>
        </NavigationLink>
      </ul>
    </nav>
    <div className={style.toggles}>
      <ThemeToggle className={style.toggles__theme} />
      <LangToggle className={style.toggles__lang} />
    </div>
  </header>
);

export default Header;
