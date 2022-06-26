import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = () => (
  <div className={styles.container}>
    <div>Header</div>
    <div>
      <Outlet />
    </div>
    <div>Footer</div>
  </div>
);

export default Layout;
