# Echom: E-Commerce Website for the Visually Impaired

## Overview
**Echom** is an accessible eCommerce platform designed to provide a seamless shopping experience for visually impaired users. The website features voice-based interaction, a responsive design, and real-time updates to enhance user experience. 

## Features

### Customer Interface (Frontend)
- **Responsive Design:** Built with React, ensuring compatibility across various devices.
- **Voice-Based Interaction:** Integrated speech recognition for hands-free navigation and operation.

### Admin Panel
- **User Management:** Admins can manage customer and delivery personnel accounts.
- **Product & Category Management:** Easily add, edit, and remove products and categories.
- **Order Tracking:** Real-time monitoring and status updates for orders.
- **Analytics Dashboard:** Track key metrics such as popular items and user activity.

### Backend (Server)
- **Real-Time Updates:** WebSockets provide instant order status updates.
- **Security:** Secure endpoints, encrypted user data, and Stripe-powered secure payment processing.

## Technology Stack
- **Frontend:** React, CSS3, Bootstrap/Material UI, Stripe for payment processing.
- **Backend:** Node.js, Express.js, WebSockets for real-time updates.
- **Database:** MongoDB for efficient data management.
- **Payment Integration:** Stripe for secure transactions.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- MongoDB (if running locally)

### Installation
1. **Clone the Repository:**
   ```bash
   git clone <repo-url>
   cd Echom
   ```
2. **Install Dependencies:**
   ```bash
   cd frontend
   npm install
   cd backend
   npm install
   ```
3. **Set Up Environment Variables:**
   - Create a `.env` file in `Echom/backend/`.
   - Add the following keys:
     ```env
     STRIPE_SECRET_KEY=your_stripe_key
     JWT_SECRET=your_random_secret_key
     MONGO_URI=your_mongo_db_uri
     ```

4. **Run the Application:**
   ```bash
   # Start the frontend
   cd frontend
   npm run dev
   
   # Start the backend
   cd ../backend
   node server.js
   ```

## Contribution Guidelines
We welcome contributions to **Echom**! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a pull request.

Please follow standard coding practices and include meaningful comments in your code.

## License
This project is licensed under the MIT License.

## Contact
For any queries or suggestions, feel free to reach out!

---
Enjoy exploring **Echom** and making eCommerce more accessible!
