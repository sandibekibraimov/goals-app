const getGoals = (req, res) => {
  res.status(200).json({ message: 'get all goals' });
};

const createGoal = (req, res) => {
  res.status(200).json({ message: 'post a new goal' });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: 'update a goal' });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: 'delete a goal' });
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
