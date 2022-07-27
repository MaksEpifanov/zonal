import { Route, Routes } from 'react-router-dom';

import Layout from 'common/components/Layout';
import {
  ClockPage, StopwatchPage, PomodoroPage, TodoPage, NotFound,
} from 'pages';

import './App.scss';

const App = () => (
  <Routes>
    <Route path="/zonal" element={<Layout />}>
      <Route index element={<ClockPage />} />
      <Route path="stopwatch" element={<StopwatchPage />} />
      <Route path="pomodoro" element={<PomodoroPage />} />
      <Route path="todo" element={<TodoPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
export default App;
