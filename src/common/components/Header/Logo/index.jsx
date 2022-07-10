import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';
import { ReactComponent as LogoSvgMobile } from 'assets/icons/logo-mobile.svg';
import styles from './Logo.module.scss';

const Logo = () => (
  <Link to="/" className={styles.Logo}>
    <LogoSvg className={styles.Logo__desktop} />
    <LogoSvgMobile className={styles.Logo__mobile} />
  </Link>
);

export default Logo;
