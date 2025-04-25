const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skillsOffered: [{ type: String, required: true }],
  skillsWanted: [{ type: String, required: true }],
  rating: { type: Number, default: 0 },
  bio: { type: String },
});

module.exports = mongoose.model("User", userSchema);
