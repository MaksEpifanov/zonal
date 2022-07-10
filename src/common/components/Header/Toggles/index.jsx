import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';

import styles from './Toggles.module.scss';

const Toggles = () => (
  <div className={styles.Toggles}>
    <ThemeToggle className={styles.Toggles__theme} />
    <LangToggle className={styles.Toggles__lang} />
  </div>
);

export default Toggles;
