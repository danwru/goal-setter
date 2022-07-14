const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal); // puts GET and POST routes into one line

router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;