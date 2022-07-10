import { useLocation } from 'react-router-dom';

import styles from './CurrentPage.module.scss';

const CurrentPage = () => {
  const { pathname } = useLocation();
  const text = pathname === '/' ? 'CLOCK' : pathname.slice(1).toUpperCase();
  return <p className={styles.CurrentPage}>{text}</p>;
};

export default CurrentPage;
