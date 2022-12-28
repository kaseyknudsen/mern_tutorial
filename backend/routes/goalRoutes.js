const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

const { protect } = require('../middleware/authMiddleware')

//this is a shorter way of handling it
//router.route('/').get(getGoals).post(setGoal)
//router.route('/:id').delete(deleteGoal).put(updateGoal)

router.get("/", protect, getGoals);

router.post("/", protect, setGoal);

router.put("/:id", protect, updateGoal);

router.delete("/:id", protect, deleteGoal);

module.exports = router;
