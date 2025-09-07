
// const express = require("express");
// const path = require("path");
// require("dotenv").config();
// const dbConnection = require("./db"); // ensures DB connects

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());

// // Routes
// app.use("/api/cars", require("./routes/carsRoute"));
// app.use("/api/users", require("./routes/usersRoute"));
// app.use("/api/bookings", require("./routes/bookingsRoute"));

// // Deployment setup
// if (process.env.NODE_ENV === "production") {
//   __dirname = path.resolve();
//   app.use(express.static(path.join(__dirname, "frontend", "build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running...");
//   });
// }

// // Start server
// app.listen(port, () =>
//   console.log(`🚀 Node JS Server started on port ${port}`)
// );



// const express = require("express");
// const path = require("path");
// require("dotenv").config();
// const dbConnection = require("./db"); // ensures DB connects
// const User = require("./models/userModel"); // ✅ import User model

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());

// // Routes
// app.use("/api/cars", require("./routes/carsRoute"));
// app.use("/api/users", require("./routes/usersRoute"));
// app.use("/api/bookings", require("./routes/bookingsRoute"));

// // ✅ Function to auto-create a default admin if not present
// async function createDefaultAdmin() {
//   try {
//     const admin = await User.findOne({ username: "admin123" });
//     if (!admin) {
//       const newAdmin = new User({
//         username: "admin123",
//         password: "admin123", // you can change to stronger password
//         role: "admin",
//       });
//       await newAdmin.save();
//       console.log("✅ Default admin created (username: admin123, password: admin123)");
//     } else {
//       console.log("ℹ️ Admin already exists");
//     }
//   } catch (err) {
//     console.error("Error creating default admin:", err.message);
//   }
// }

// // Run the function once after DB connection is established
// dbConnection.then(() => createDefaultAdmin());

// // Deployment setup
// if (process.env.NODE_ENV === "production") {
//   __dirname = path.resolve();
//   app.use(express.static(path.join(__dirname, "frontend", "build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running...");
//   });
// }

// // Start server
// app.listen(port, () =>
//   console.log(`🚀 Node JS Server started on port ${port}`)
// );



const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("./db"); // <-- this exports mongoose
const User = require("./models/userModel"); // to check/create admin

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/cars", require("./routes/carsRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/bookings", require("./routes/bookingsRoute"));

// Once DB is connected, check/create default admin
mongoose.connection.once("open", async () => {
  try {
    const adminExists = await User.findOne({ username: "admin" });
    if (!adminExists) {
      const adminUser = new User({
        username: "admin",
        password: "admin123", // you can change this later
        role: "admin",
      });
      await adminUser.save();
      console.log("👑 Default admin created: username=admin, password=admin123");
    } else {
      console.log("👑 Admin already exists");
    }
  } catch (err) {
    console.error("Error creating default admin:", err);
  }
});

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
