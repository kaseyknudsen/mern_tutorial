const express = require("express");
const { update } = require("react-spring");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

//this is a shorter way of handling it
//router.route('/').get(getGoals).post(setGoal)
//router.route('/:id').delete(deleteGoal).put(updateGoal)

router.get("/", getGoals);

router.post("/", setGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
