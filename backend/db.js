

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" } // new field
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
