const asyncHandler = require("express-async-handler");
/*  asyncHandler is if we don't want to use try/catch with async. We
can use the error handler instead. Wrap the entire function in asyncHandler*/

const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// @desc  Get goals
//@route  Get/api/goals
//access Private
const getGoals = asyncHandler(async (req, res) => {
  //req.user.id comes from the user model
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc  Set goal
//@route  Post/api/goals
//access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

// @desc  update goals
//@route  PUT /api/goals/:id
//access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    //this will create it if it doesn't exist
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc  delete goals
//@route  Delete /api/goals/:id
//access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
