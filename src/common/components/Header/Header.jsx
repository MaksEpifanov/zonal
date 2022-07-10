import Logo from './Logo';
import CurrentPage from './CurrentPage';
import NavigationMenu from './NavigationMenu';
import Toggles from './Toggles';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.Header__logo}>
      <Logo />
    </div>
    <div className={styles['Header__current-page']}>
      <CurrentPage />
    </div>
    <NavigationMenu />
    <Toggles />
  </header>
);

export default Header;
