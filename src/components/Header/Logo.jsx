import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';
import { ReactComponent as LogoSvgMobile } from 'assets/icons/logo-mobile.svg';
import style from './Header.module.scss';

const Logo = () => (
  <div className={style.logo}>
    <Link to="/">
      <LogoSvg className={style.logo__desktop} />
      <LogoSvgMobile className={style.logo__mobile} />
    </Link>
  </div>
);

export default Logo;
