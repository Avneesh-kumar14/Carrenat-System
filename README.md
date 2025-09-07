# Car Vault - Car Rental System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application for car rentals. Users can browse available cars, book them, and track their bookings. Admins have a dedicated panel to manage cars and bookings.

![Car Vault Banner](https://images.unsplash.com/photo-1532268116505-8c59cc37d2e6)

## Features

- **User Registration & Login**: Secure authentication with role-based access.
- **Car Catalog**: Browse available cars with details and availability.
- **Booking System**: Book cars for selected dates and view booking history.
- **Admin Panel**: Manage cars, bookings, and users.
- **Responsive UI**: Built with Ant Design for a modern look and feel.
- **Role-Based Navigation**: Admins have access to additional features.

## Technologies Used

- **Frontend**: React.js, Redux, React Router, Ant Design, Axios, Moment.js
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), dotenv
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Integration**: Stripe (optional, based on environment)

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/Avneesh-kumar14/Carrenat-System.git
   cd Carrenat-System/backend
2. cd frontend  - npm install
3.  cd backend  - npm install
4.  Aftyer that bash - npm start in both

5. PORT=5000
MONGO_URI= Your local host id
SECRET_KEY= enter you secret key 
PAYMENT_MODE=fake
BACK_END_STRIPE_KEY=sk_test_dummyKey123456

6. Start the server -  node server.js
