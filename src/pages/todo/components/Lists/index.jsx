import PropTypes from 'prop-types';
import { ReactComponent as AddSVG } from 'assets/icons/add.svg';
import Button from 'common/components/UI/Button';

import styles from './Lists.module.scss';

const Lists = ({ className }) => {
  const classNames = `${styles.Lists} ${className}`;
  return (
    <div className={classNames}>
      <div className={styles.header}>
        <h3 className={styles.header__title}>Lists</h3>
        <AddSVG className={styles.header__addBtn} />
      </div>
      <div className={styles.lists}>
        <Button item noResponse onClick={() => {}} value="all" />
        <Button item noResponse onClick={() => {}} value="Home" />
        <Button item noResponse onClick={() => {}} value="Work" active />
      </div>
    </div>
  );
};

export default Lists;

Lists.propTypes = {
  className: PropTypes.string,
};

Lists.defaultProps = {
  className: '',
};
