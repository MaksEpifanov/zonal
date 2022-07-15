import { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'common/components/Layout';
import {
  ClockPage, StopwatchPage, PomodoroPage, TodoPage,
} from 'pages';

import { StoreContext } from 'store/Store';
import Test from './pages/test';

import './App.scss';

const App = () => {
  const [{ common: { theme } }] = useContext(StoreContext);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ClockPage />} />
        <Route path="stopwatch" element={<StopwatchPage />} />
        <Route path="pomodoro" element={<PomodoroPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export default App;
