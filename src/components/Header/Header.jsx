import Logo from 'components/Logo';
import CustomNavLink from './CustomNavLink';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.Header}>
    <div className={style.logo}>
      <Logo />
    </div>
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <CustomNavLink to="/">Clock</CustomNavLink>
        <CustomNavLink to="/stopwatch">Stopwatch</CustomNavLink>
        <CustomNavLink to="/pomodoro">Pomodoro</CustomNavLink>
        <CustomNavLink to="/todo">To Do</CustomNavLink>
      </ul>
    </nav>
    <div className={style.headerBtns}>
      <button type="button" className={style.themeBtn}>Theme</button>
      <button type="button" className={style.langBtn}>Lang</button>
    </div>
  </header>
);

export default Header;
