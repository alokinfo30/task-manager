import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do'); // Default status

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      status,
      title,
      description,
      status,
    };

    try {
      const response = await axios.post('/api/tasks', newTask);
      console.log('Task created successfully:', response.data);
      // Clear the form after successful submission (optional)
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating task:', error.message);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="status">Status:</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
