// models/taskModel.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: String,
  stage: String,
  id: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  // Reference to User model
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
