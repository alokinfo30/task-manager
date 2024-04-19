const express = require('express');
const path = require('path');
const connectDB = require('./db'); // Replace with your DB connection function
const tasksRouter = require('./routes/tasks'); // Router for task endpoints

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Body parser middleware
app.use(express.json());

// Serve static assets (React build output)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// API routes
app.use('/api/tasks', tasksRouter); // Use the tasks router for task endpoints

// Server-side rendering (SSR) for all other routes
const { renderToString } = require('react-dom/server');
const App = require('../client/App'); // Import your React App component

app.get('*', (req, res) => {
  const preloadedState = { tasks: [] }; // Initial state for tasks (replace with actual data fetching)

  const content = renderToString(<App preloadedState={preloadedState} />);

  res.render('index', { content }); // Pass rendered content to HTML template
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
