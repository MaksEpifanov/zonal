import Logo from './Logo';
import CurrentPage from './CurrentPage';
import NavigationMenu from './NavigationMenu';
import Toggles from './Toggles';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.Header}>
    <Logo className={styles.Header__logo} />
    <CurrentPage className={styles['Header__current-page']} />
    <NavigationMenu />
    <Toggles className={styles.Header__toggles} />
  </header>
);

export default Header;
