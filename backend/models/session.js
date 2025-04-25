const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  hostUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  guestUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  scheduledTime: { type: Date, required: true },
  status: { type: String, enum: ["pending", "confirmed", "completed"], default: "pending" },
  feedback: { type: String },
});

module.exports = mongoose.model("Session", sessionSchema);
