import Lists from './components/Lists';
import Todos from './components/Todos';

import styles from './TodoPage.module.scss';

const TodoPage = () => (
  <div className={styles.TodoPage}>
    <Lists />
    <Todos />
  </div>
);

export default TodoPage;
