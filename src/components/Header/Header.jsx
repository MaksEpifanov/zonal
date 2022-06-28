import Logo from 'components/Logo';
import { ReactComponent as ClockSvg } from 'assets/icons/clock.svg';
import { ReactComponent as StopwatchSvg } from 'assets/icons/stopwatch.svg';
import { ReactComponent as PomodoroSvg } from 'assets/icons/pomodoro.svg';
import { ReactComponent as TodoSvg } from 'assets/icons/todo.svg';
import { ReactComponent as ThemeSvg } from 'assets/icons/theme.svg';
import { ReactComponent as LangSvg } from 'assets/icons/lang.svg';
import CustomNavLink from './CustomNavLink';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.Header}>
    <div className={style.logo}>
      <Logo />
    </div>
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <CustomNavLink to="/">
          <ClockSvg className={style.nav__icon} />
          Clock
        </CustomNavLink>
        <CustomNavLink to="/stopwatch">
          <StopwatchSvg className={style.nav__icon} />
          Stopwatch
        </CustomNavLink>
        <CustomNavLink to="/pomodoro">
          <PomodoroSvg className={style.nav__icon} />
          Pomodoro
        </CustomNavLink>
        <CustomNavLink to="/todo">
          <TodoSvg className={style.nav__icon} />
          To Do
        </CustomNavLink>
      </ul>
    </nav>
    <div className={style.toggles}>
      <button type="button" className={style.toggles__theme}>
        <ThemeSvg className={style.toggles__themeSvg} />
      </button>
      <button type="button" className={style.toggles__lang}>
        <LangSvg className={style.toggles__langSvg} />
      </button>
    </div>
  </header>
);

export default Header;
