
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// POST /api/users/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user with matching username + password
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send back user info + token
    res.json({
      success: true,
      token,
      user: {
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Login failed", error });
  }
});

// POST /api/users/register
router.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Default role is "user" unless explicitly set as "admin"
    const newUser = new User({
      username,
      password,
      role: role || "user",
    });

    await newUser.save();

    res.send("User registered successfully");
  } catch (error) {
    return res.status(400).json({ message: "Registration failed", error });
  }
});

module.exports = router;
