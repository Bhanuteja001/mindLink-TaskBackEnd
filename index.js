// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
const db = require('./db');
const Task = require('./models/taskModel');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

// Create Task
app.post('/tasks', authMiddleware, async (req, res) => {
  const { task, stage, id } = req.body;
  const newTask = new Task({ task, stage, id, user: req.user.id });
  await newTask.save();
  res.json(newTask);
});

// Get Tasks
app.get('/tasks', authMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// Update Task
app.put('/tasks/:id', authMiddleware, async (req, res) => {
  const { stage } = req.body;
  const updatedTask = await Task.findOneAndUpdate(
    { id: req.params.id, user: req.user.id },
    { stage },
    { new: true }
  );
  res.json(updatedTask);
});

// Delete Task
app.delete('/tasks/:id', authMiddleware, async (req, res) => {
  await Task.findOneAndDelete({ id: req.params.id, user: req.user.id });
  res.json({ message: 'Task deleted' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
