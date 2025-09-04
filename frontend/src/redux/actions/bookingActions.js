// import axios from "axios";
// import { message } from "antd";
// export const bookCar = (reqObj) => async (dispatch) => {
//   dispatch({ type: "LOADING", payload: true });

//   try {
//      await axios.post("/api/bookings/bookcar" , reqObj);

//     dispatch({ type: "LOADING", payload: false });
//     message.success("Your car booked successfully");
//     setTimeout(() => {
//       window.location.href='/userbookings'
//     }, 500);

    
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "LOADING", payload: false });
//     message.error("Something went wrong , please try later");
//   }
// };

// export const getAllBookings=()=>async dispatch=>{

//   dispatch({type: 'LOADING' , payload:true})

//   try {
//       const response = await axios.get('/api/bookings/getallbookings')
//       dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
//       dispatch({type: 'LOADING' , payload:false})
//   } catch (error) {
//       console.log(error)
//       dispatch({type: 'LOADING' , payload:false})
//   }

// }


// frontend/src/redux/actions/bookingActions.js
import axios from "axios";
import { message } from "antd";

// Book a car
export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    // attach logged-in user ID
    const user = JSON.parse(localStorage.getItem("user"));
    reqObj.user = user._id;

    await axios.post("/api/bookings/bookcar", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("✅ Your car booked successfully");

    setTimeout(() => {
      window.location.href = "/userbookings";
    }, 500);
  } catch (error) {
    console.error("Booking error:", error);
    dispatch({ type: "LOADING", payload: false });
    message.error("❌ Something went wrong, please try again");
  }
};

// Get all bookings
export const getAllBookings = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get("/api/bookings/getallbookings");
    dispatch({ type: "GET_ALL_BOOKINGS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.error("Get bookings error:", error);
    dispatch({ type: "LOADING", payload: false });
  }
};
