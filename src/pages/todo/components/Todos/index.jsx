import TodoItem from '../TodoItem';

import styles from './Todos.module.scss';

const Todos = () => (
  <div className={styles.Todos}>
    <TodoItem id={1} text="new Todos for me" isChecked={false} onCheck={() => {}} onDelete={() => {}} />
    <TodoItem id={2} list="Work" text="Second todo Laborum id anim quis do aliquip eu cupidatat laborum aliqua eiusmod anim velit ipsum. Cupidatat est ut nostrud sint nisi eu fugiat magna quis consequat quis reprehenderit reprehenderit fugiat. Est et ullamco ex aliqua magna irure consectetur ea ea non cupidatat incididunt. Est culpa et incididunt proident dolore velit proident. Ipsum irure magna aute voluptate sit. Ut sit reprehenderit est consequat commodo esse tempor nisi sint eu in. Amet et deserunt mollit tempor incididunt minim." isChecked={false} onCheck={() => {}} onDelete={() => {}} />
    <TodoItem id={3} list="Home" text="Third todo" isChecked onCheck={() => {}} onDelete={() => {}} />
  </div>
);

export default Todos;
