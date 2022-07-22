import PropTypes from 'prop-types';
import { ReactComponent as AddSVG } from 'assets/icons/add.svg';
import Button from 'common/components/UI/Button';

import useLists from 'pages/todo/hooks/useLists';
import useActiveLists from 'pages/todo/hooks/useActiveList';

import styles from './Lists.module.scss';

const Lists = ({ className }) => {
  const classNames = `${styles.Lists} ${className}`;

  const [lists, , deleteList] = useLists();
  const [activeList, changeActiveList] = useActiveLists();

  const labelList = lists.map((list) => (
    <Button
      item
      noResponse
      onClick={() => changeActiveList(list.id)}
      value={list.name}
      active={activeList === list.id}
      onDelete={() => list.id !== 0 && deleteList(list.id)}
    />
  ));

  return (
    <div className={classNames}>
      <div className={styles.header}>
        <h3 className={styles.header__title}>Lists</h3>
        <AddSVG className={styles.header__addBtn} />
      </div>
      <div className={styles.lists}>
        {labelList}
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
