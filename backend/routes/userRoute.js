const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create or Update User
router.post("/", async (req, res) => {
  const { email, name, skillsOffered, skillsWanted, bio } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name, skillsOffered, skillsWanted, bio },
      { upsert: true, new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
