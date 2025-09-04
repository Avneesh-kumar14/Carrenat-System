// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({


//       car : {type : mongoose.Schema.Types.ObjectID , ref:'cars'},
//       user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
//       bookedTimeSlots : {
//           from : {type : String} ,
//           to : {type : String}
//       } ,
//       totalHours : {type : Number},
//       totalAmount : {type : Number},
//       transactionId : {type : String},
//       driverRequired : {type : Boolean}


// },
//   {timestamps : true}
// )

// const bookingModel = mongoose.model('bookings' , bookingSchema)

// module.exports = bookingModel





// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema(
//   {
//     car: { type: mongoose.Schema.Types.ObjectId, ref: "cars" },   // must match your car model name
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, // must match your user model name
//     bookedTimeSlots: {
//       from: { type: String },
//       to: { type: String },
//     },
//     totalHours: { type: Number },
//     totalAmount: { type: Number },
//     transactionId: { type: String },
//     driverRequired: { type: Boolean },
//   },
//   { timestamps: true }
// );

// const bookingModel = mongoose.model("bookings", bookingSchema);
// module.exports = bookingModel;



// backend/models/bookingModel.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectId, ref: "cars" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    bookedTimeSlots: {
      from: { type: String },
      to: { type: String },
    },
    totalHours: { type: Number },
    totalAmount: { type: Number },
    transactionId: { type: String },
    driverRequired: { type: Boolean },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("bookings", bookingSchema);
module.exports = bookingModel;
