import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskDetails = ({ match }) => {
  const [task, setTask] = useState({});

  useEffect(() => {
    const fetchTask = async () => {
      const taskId = match.params.id;
      const response = await axios.get(`/api/tasks/${taskId}`);
      setTask(response.data);
    };

    fetchTask();
  }, [match]);

  return (
    <div>
      <h2>Task Details</h2>
      {task && (
        <>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
          <p>Due Date: {task.dueDate && new Date(task.dueDate).toLocaleDateString()}</p>
        </>
      )}
    </div>
  );
};

export default TaskDetails;
