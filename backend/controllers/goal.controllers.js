// @desc    get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'get all goals' });
};

// @desc    create goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'post a new goal' });
};

// @desc    update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `update a goal - ${id}` });
};

// @desc    delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `delete a goal - ${id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
