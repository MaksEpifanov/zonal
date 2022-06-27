import { NavLink } from 'react-router-dom';

import Logo from 'components/Logo';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <div className={style.logo}>
      <Logo />
    </div>
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <NavLink to="/" className={style.nav__link}>Clock</NavLink>
        </li>
        <li className={style.header__item}>
          <NavLink to="/stopwatch" className={style.nav__link}>Stopwatch</NavLink>
        </li>
        <li className={style.header__item}>
          <NavLink to="/pomodoro" className={style.nav__link}>Pomodoro</NavLink>
        </li>
        <li className={style.header__item}>
          <NavLink to="/todo" className={style.nav__link}>To Do</NavLink>
        </li>
      </ul>
    </nav>
    <div className={style.headerBtns}>
      <button type="button" className={style.themeBtn}>Theme</button>
      <button type="button" className={style.langBtn}>Lang</button>
    </div>
  </header>
);

export default Header;
