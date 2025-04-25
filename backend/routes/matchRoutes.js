const express = require("express");
const User = require("../models/User");
const matchUsers = require("../utils/matchingAlgorithm");
const router = express.Router();

// Find Matches
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    const allUsers = await User.find({ _id: { $ne: userId } });

    const matches = matchUsers(user, allUsers);
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
