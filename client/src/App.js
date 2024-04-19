import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm'; // Import your TaskForm component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/new" element={<TaskForm />} /> {/* Add your TaskForm Route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
