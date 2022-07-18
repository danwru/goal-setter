const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal); // puts GET and POST routes into one line

router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
