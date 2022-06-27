import { NavLink } from 'react-router-dom';

import Logo from 'components/Logo';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <div className={style.header__logo}>
      <Logo />
    </div>
    <nav className={style.header__nav}>
      <ul className={style.header__list}>
        <li className={style.header__item}>
          <NavLink to="/" className={style.header__link}>Clock</NavLink>
        </li>
        <li className={style.header__item}>
          <NavLink to="/stopwatch" className={style.header__link}>Stopwatch</NavLink>
        </li>
        <li className={style.header__item}>
          <NavLink to="/pomodoro" className={style.header__link}>Pomodoro</NavLink>
        </li>
        <li className={style.header__item}>
          <NavLink to="/todo" className={style.header__link}>To Do</NavLink>
        </li>
      </ul>
    </nav>
    <div className={style.header__btns}>
      <button type="button" className={style.themeBtn}>Theme</button>
      <button type="button" className={style.langBtn}>Lang</button>
    </div>
  </header>
);

export default Header;
