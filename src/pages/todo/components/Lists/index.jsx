import { ReactComponent as AddSVG } from 'assets/icons/add.svg';
import Button from 'common/components/UI/Button';

import styles from './Lists.module.scss';

const Lists = () => (
  <div className={styles.Lists}>
    <div className={styles.header}>
      <h3>Lists</h3>
      <button type="button">
        <AddSVG />
        add
      </button>
    </div>
    <div className={styles.lists}>
      <Button item noResponse onClick={() => {}} />
    </div>
  </div>
);

export default Lists;
