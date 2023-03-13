import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Task1 from './components/Task_1/Task1';
import Task2 from './components/Task_2/Task2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task1" element={<Task1 />} />
      <Route path="/task2" element={<Task2 />} />
    </Routes>
  );
}

export default App;
