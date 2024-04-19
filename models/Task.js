const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done'],
  },
  dueDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
