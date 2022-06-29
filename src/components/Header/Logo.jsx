import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';
import style from './Header.module.scss';
import './Logo.scss';

const Logo = () => (
  <div className={style.logo}>
    <Link to="/">
      <LogoSvg />
    </Link>
  </div>
);

export default Logo;
