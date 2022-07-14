import { useState } from 'react';

import Modal from 'common/components/UI/Modal';
import Button from 'common/components/UI/Button';
import Lists from './components/Lists';
import Todos from './components/Todos';

import styles from './TodoPage.module.scss';

const TodoPage = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const onViewModal = () => setOpenModal((prevOpenModal) => !prevOpenModal);

  return (
    <div className={styles.TodoPage}>
      <Lists className={styles.TodoPage__lists} />
      <div className={styles.TodoPage__sep} />
      <Todos className={styles.TodoPage__todos} />
      <div className={styles.TodoPage__openBtn}>
        <Button primary onClick={onViewModal} value="View" />
      </div>

      <Modal
        isOpen={isOpenModal}
        handleClose={onViewModal}
      >
        <Lists />
      </Modal>
    </div>
  );
};

export default TodoPage;
