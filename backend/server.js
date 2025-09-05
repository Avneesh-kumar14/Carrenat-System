
const express = require("express");
const path = require("path");
require("dotenv").config();
const dbConnection = require("./db"); // ensures DB connects

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/cars", require("./routes/carsRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/bookings", require("./routes/bookingsRoute"));

// Deployment setup
if (process.env.NODE_ENV === "production") {
  __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// Start server
app.listen(port, () =>
  console.log(`🚀 Node JS Server started on port ${port}`)
);
