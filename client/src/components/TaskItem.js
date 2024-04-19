import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  return (
    <li key={task._id}>
      <Link to={`/tasks/${task._id}`}>{task.title}</Link>
    </li>
  );
};

export default TaskItem;
