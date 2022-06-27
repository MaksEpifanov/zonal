import { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import ClockPage from 'pages/ClockPage';
import StopwatchPage from 'pages/StopwatchPage';
import PomodoroPage from 'pages/PomodoroPage';
import TodoPage from 'pages/TodoPage';

import { StoreContext } from 'store/Store';

import './App.scss';

const App = () => {
  const [{ theme }] = useContext(StoreContext);
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
      </Route>
    </Routes>
  );
};

export default App;
