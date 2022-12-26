const asyncHandler = require("express-async-handler");

// @desc  Get goals
//@route  Get/api/goals
//access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc  Set goal
//@route  Post/api/goals
//access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goal" });
});

// @desc  update goals
//@route  PUT /api/goals/:id
//access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc  delete goals
//@route  Delete /api/goals/:id
//access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
});
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
