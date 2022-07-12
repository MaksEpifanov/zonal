import TodoItem from '../TodoItem';

import styles from './Todos.module.scss';

const Todos = () => (
  <div className={styles.Todos}>
    <TodoItem text="new Todos for me" isChecked={false} onCheck={() => {}} onDelete={() => {}} />
    <TodoItem list="Work" text="Second todo" isChecked={false} onChecked={() => {}} onDelete={() => {}} />
    <TodoItem list="Home" text="Third todo" isChecked onChecked={() => {}} onDelete={() => {}} />
  </div>
);

export default Todos;
