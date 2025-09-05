
const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const { v4: uuidv4 } = require("uuid");

router.post("/bookcar", async (req, res) => {
  try {

    req.body.transactionId = req.body.token?.id || uuidv4();

    // save booking
    const newBooking = new Booking(req.body);
    await newBooking.save();

    // update car slots
    const car = await Car.findOne({ _id: req.body.car });
    if (!car.bookedTimeSlots) car.bookedTimeSlots = [];
    car.bookedTimeSlots.push(req.body.bookedTimeSlots);
    await car.save();

    res.send("✅ Your booking was successful (Test Mode)");
  } catch (error) {
    console.error("Booking error:", error.message);
    return res.status(400).json({ message: "Booking failed", error });
  }
});

// Get all bookings
router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car");
    res.send(bookings);
  } catch (error) {
    console.error("Get bookings error:", error.message);
    return res.status(400).json({ message: "Error fetching bookings", error });
  }
});

module.exports = router;
