import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import styles from './Layout.module.scss';

const Layout = () => (
  <div className={styles.container}>
    <Header />
    <div>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
