import { Outlet } from 'react-router-dom';

import Footer from 'common/components/Footer';
import Header from 'common/components/Header';

import styles from './Layout.module.scss';

const Layout = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
