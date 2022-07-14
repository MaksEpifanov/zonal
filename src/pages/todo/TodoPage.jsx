import Lists from './components/Lists';
import Todos from './components/Todos';

import styles from './TodoPage.module.scss';

const TodoPage = () => (
  <div className={styles.TodoPage}>
    <Lists className={styles.TodoPage__lists} />
    <div className={styles.TodoPage__sep} />
    <Todos className={styles.TodoPage__todos} />
  </div>
);

export default TodoPage;
