# 🍔 BiteBox - Full Stack Food Delivery App

A comprehensive MERN stack food delivery application with real-time order tracking, Google OAuth authentication, Razorpay payment integration, and live map tracking for delivery management.

## 📝 Short Description

BiteBox is a complete food delivery platform that connects customers, restaurant owners, and delivery personnel through a seamless ordering and tracking experience. The app features real-time order tracking, secure payment processing, and intelligent delivery assignment based on location proximity.

## 🌐 Live Demo

**Frontend:** [Live Demo Link](https://your-frontend-url.com)  
**Backend API:** [API Documentation](https://your-api-url.com)

## 💡 Motivation / Problem Statement

The food delivery industry lacks efficient real-time tracking and intelligent delivery assignment systems. BiteBox addresses these challenges by providing:

- **Real-time order tracking** with live map updates
- **Intelligent delivery assignment** based on proximity and availability
- **Multi-role authentication** supporting customers, restaurant owners, and delivery personnel
- **OTP-based delivery verification** for secure order completion
- **Seamless payment processing** with multiple payment options

**Target Users:**
- Food enthusiasts looking for convenient delivery options
- Restaurant owners wanting to expand their reach
- Delivery personnel seeking flexible work opportunities

## ✨ Features

### 👤 User Features
- **Google Auth Integration** - One-tap login with Google
- **Multi-role Authentication** - Customer, Restaurant Owner, Delivery Boy roles
- **Password Reset** - Email OTP-based password recovery
- **Smart Cart System** - Add items from multiple restaurants
- **Real-time Order Tracking** - Live map updates with delivery boy location
- **Order History** - Complete order management and tracking
- **Multiple Payment Options** - COD and online payments via Razorpay

### 🏪 Restaurant Owner Features
- **Shop Management** - Create and manage restaurant profiles
- **Menu Management** - Add, edit, and categorize food items
- **Order Management** - Real-time order notifications and status updates
- **Analytics Dashboard** - Order statistics and performance metrics
- **Delivery Assignment** - Automatic delivery boy assignment

### 🚚 Delivery Boy Features
- **Order Assignment** - Automatic assignment based on location proximity
- **Real-time Location Tracking** - Live location updates during delivery
- **Order Management** - Accept/reject delivery assignments
- **OTP Verification** - Secure order delivery confirmation
- **Performance Analytics** - Daily delivery statistics

### 🔧 Technical Features
- **Real-time Communication** - Socket.io for live updates
- **Geospatial Queries** - MongoDB 2dsphere indexing for location-based searches
- **Image Upload** - Cloudinary integration for food and shop images
- **Email Notifications** - Nodemailer for OTP and order notifications
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **State Management** - Redux Toolkit for efficient state management

## 🧰 Tech Stack

### Frontend
- **React 19.1.1** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Redux Toolkit 2.9.0** - State management
- **React Router DOM 7.9.1** - Client-side routing
- **React Leaflet 5.0.0** - Interactive maps
- **Socket.io Client 4.8.1** - Real-time communication
- **Firebase 12.3.0** - Google OAuth authentication
- **Axios 1.12.2** - HTTP client
- **React Icons 5.5.0** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web application framework
- **MongoDB 8.18.1** - NoSQL database with Mongoose ODM
- **Socket.io 4.8.1** - Real-time bidirectional communication
- **JWT** - JSON Web Token authentication
- **Bcryptjs 3.0.2** - Password hashing
- **Razorpay 2.9.6** - Payment gateway integration
- **Cloudinary 2.7.0** - Image upload and management
- **Nodemailer 7.0.6** - Email service
- **Multer 2.0.2** - File upload middleware

### APIs & Services
- **Google OAuth 2.0** - Authentication
- **Razorpay Payment Gateway** - Payment processing
- **Cloudinary** - Image storage and optimization
- **OpenStreetMap** - Map tiles and geocoding
- **Gmail SMTP** - Email delivery

## 🏗️ System Architecture

```
BiteBox/
├── app/
│   ├── backend/                 # Node.js/Express API
│   │   ├── config/
│   │   │   └── db.js           # MongoDB connection
│   │   ├── controllers/        # Route handlers
│   │   │   ├── auth.controllers.js
│   │   │   ├── item.controllers.js
│   │   │   ├── order.controllers.js
│   │   │   ├── shop.controllers.js
│   │   │   └── user.controllers.js
│   │   ├── middlewares/
│   │   │   ├── isAuth.js       # JWT authentication
│   │   │   └── multer.js       # File upload handling
│   │   ├── models/             # MongoDB schemas
│   │   │   ├── user.model.js
│   │   │   ├── shop.model.js
│   │   │   ├── item.model.js
│   │   │   ├── order.model.js
│   │   │   └── deliveryAssignment.model.js
│   │   ├── routes/             # API routes
│   │   │   ├── auth.routes.js
│   │   │   ├── item.routes.js
│   │   │   ├── order.routes.js
│   │   │   ├── shop.routes.js
│   │   │   └── user.routes.js
│   │   ├── utils/              # Utility functions
│   │   │   ├── cloudinary.js   # Image upload
│   │   │   ├── mail.js         # Email service
│   │   │   ├── socket.js       # Socket.io handlers
│   │   │   └── token.js        # JWT utilities
│   │   ├── index.js            # Server entry point
│   │   └── package.json
│   └── frontend/               # React application
│       ├── src/
│       │   ├── components/     # Reusable components
│       │   │   ├── CartItemCard.jsx
│       │   │   ├── CategoryCard.jsx
│       │   │   ├── DeliveryBoy.jsx
│       │   │   ├── DeliveryBoyTracking.jsx
│       │   │   ├── FoodCard.jsx
│       │   │   ├── Nav.jsx
│       │   │   ├── OwnerDashboard.jsx
│       │   │   ├── OwnerItemCard.jsx
│       │   │   ├── OwnerOrderCard.jsx
│       │   │   ├── UserDashboard.jsx
│       │   │   └── UserOrderCard.jsx
│       │   ├── hooks/          # Custom React hooks
│       │   │   ├── useGetCity.jsx
│       │   │   ├── useGetCurrentUser.jsx
│       │   │   ├── useGetItemsByCity.jsx
│       │   │   ├── useGetMyOrders.jsx
│       │   │   ├── useGetMyShop.jsx
│       │   │   ├── useGetShopByCity.jsx
│       │   │   └── useUpdateLocation.jsx
│       │   ├── pages/          # Page components
│       │   │   ├── AddItem.jsx
│       │   │   ├── CartPage.jsx
│       │   │   ├── CheckOut.jsx
│       │   │   ├── CreateEditShop.jsx
│       │   │   ├── EditItem.jsx
│       │   │   ├── ForgotPassword.jsx
│       │   │   ├── Home.jsx
│       │   │   ├── MyOrders.jsx
│       │   │   ├── OrderPlaced.jsx
│       │   │   ├── Shop.jsx
│       │   │   ├── SignIn.jsx
│       │   │   ├── SignUp.jsx
│       │   │   └── TrackOrderPage.jsx
│       │   ├── redux/          # State management
│       │   │   ├── mapSlice.js
│       │   │   ├── ownerSlice.js
│       │   │   ├── store.js
│       │   │   └── userSlice.js
│       │   ├── assets/         # Static assets
│       │   ├── App.jsx         # Main app component
│       │   ├── main.jsx        # App entry point
│       │   └── index.css       # Global styles
│       ├── firebase.js         # Firebase configuration
│       └── package.json
```

## ⚙️ Installation & Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/bitebox.git
cd bitebox
```

### 2. Backend Setup
```bash
cd app/backend
npm install
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Environment Configuration
Create `.env` files in both backend and frontend directories:

**Backend (.env):**
```env
PORT=8000
MONGODB_URL=mongodb://localhost:27017/bitebox
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
SMTP_USER=your_gmail_address
SMTP_PASS=your_gmail_app_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

**Frontend (.env):**
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_GEOAPIKEY=your_geoapify_or_google_maps_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_public_key
```

### 5. Run the Application
```bash
# Terminal 1 - Backend
cd app/backend
npm run dev

# Terminal 2 - Frontend
cd app/frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000`

## 🔑 Environment Variables

### Backend Required Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port number | Yes |
| `MONGODB_URL` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `RAZORPAY_KEY_ID` | Razorpay API key ID | Yes |
| `RAZORPAY_KEY_SECRET` | Razorpay API secret | Yes |
| `SMTP_USER` | Gmail address for sending emails | Yes |
| `SMTP_PASS` | Gmail app password | Yes |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Yes |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Yes |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Yes |

### Frontend Required Variables
| Variable | Description | Required |
|-----------|-------------|-----------|
| `VITE_FIREBASE_APIKEY` | Firebase API key for authentication and database services | Yes |
| `VITE_GEOAPIKEY` | API key for location/geocoding services (e.g., Geoapify or Google Maps) | Yes |
| `VITE_RAZORPAY_KEY_ID` | Public key for Razorpay payment integration | Yes |

> ⚠️ Ensure all variable names start with `VITE_` — this is required by Vite to expose them to the frontend code.

## 🧪 API Documentation

### Authentication Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | User registration |
| POST | `/api/auth/signin` | User login |
| POST | `/api/auth/signout` | User logout |
| POST | `/api/auth/google-auth` | Google OAuth authentication |
| POST | `/api/auth/send-otp` | Send password reset OTP |
| POST | `/api/auth/verify-otp` | Verify password reset OTP |
| POST | `/api/auth/reset-password` | Reset password |

### User Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/get-current-user` | Get current user details |
| PUT | `/api/user/update-profile` | Update user profile |
| PUT | `/api/user/update-location` | Update user location |

### Shop Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/shop/get-my-shop` | Get current user's shop |
| POST | `/api/shop/create-shop` | Create new shop |
| PUT | `/api/shop/update-shop` | Update shop details |
| GET | `/api/shop/get-shops-by-city` | Get shops by city |

### Item Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/item/get-items-by-city` | Get items by city |
| POST | `/api/item/add-item` | Add new item |
| PUT | `/api/item/update-item/:id` | Update item details |
| DELETE | `/api/item/delete-item/:id` | Delete item |

### Order Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/order/place-order` | Place new order |
| POST | `/api/order/verify-payment` | Verify Razorpay payment |
| GET | `/api/order/get-my-orders` | Get user's orders |
| PUT | `/api/order/update-order-status/:orderId/:shopId` | Update order status |
| GET | `/api/order/get-order-by-id/:orderId` | Get order by ID |
| GET | `/api/order/get-delivery-assignments` | Get delivery assignments |
| POST | `/api/order/accept-order/:assignmentId` | Accept delivery assignment |
| GET | `/api/order/get-current-order` | Get current delivery order |
| POST | `/api/order/send-delivery-otp` | Send delivery OTP |
| POST | `/api/order/verify-delivery-otp` | Verify delivery OTP |
| GET | `/api/order/get-today-deliveries` | Get today's delivery stats |

## 🧱 Database Schema

### User Schema
```javascript
{
  fullName: String (required),
  email: String (unique, required),
  password: String,
  mobile: String (required),
  role: String (enum: ["user", "owner", "deliveryBoy"]),
  resetOtp: String,
  isOtpVerified: Boolean,
  otpExpires: Date,
  socketId: String,
  isOnline: Boolean,
  location: {
    type: "Point",
    coordinates: [Number, Number]
  },
  timestamps: true
}
```

### Shop Schema
```javascript
{
  name: String (required),
  image: String (required),
  owner: ObjectId (ref: "User"),
  city: String (required),
  state: String (required),
  address: String (required),
  items: [ObjectId] (ref: "Item"),
  timestamps: true
}
```

### Item Schema
```javascript
{
  name: String (required),
  image: String (required),
  shop: ObjectId (ref: "Shop"),
  category: String (enum: ["Snacks", "Main Course", "Desserts", ...]),
  price: Number (min: 0, required),
  foodType: String (enum: ["veg", "non veg"]),
  rating: {
    average: Number,
    count: Number
  },
  timestamps: true
}
```

### Order Schema
```javascript
{
  user: ObjectId (ref: "User"),
  paymentMethod: String (enum: ["cod", "online"]),
  deliveryAddress: {
    text: String,
    latitude: Number,
    longitude: Number
  },
  totalAmount: Number,
  shopOrders: [{
    shop: ObjectId (ref: "Shop"),
    owner: ObjectId (ref: "User"),
    subtotal: Number,
    shopOrderItems: [{
      item: ObjectId (ref: "Item"),
      name: String,
      price: Number,
      quantity: Number
    }],
    status: String (enum: ["pending", "preparing", "out for delivery", "delivered"]),
    assignment: ObjectId (ref: "DeliveryAssignment"),
    assignedDeliveryBoy: ObjectId (ref: "User"),
    deliveryOtp: String,
    otpExpires: Date,
    deliveredAt: Date
  }],
  payment: Boolean,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  timestamps: true
}
```

### Delivery Assignment Schema
```javascript
{
  order: ObjectId (ref: "Order"),
  shop: ObjectId (ref: "Shop"),
  shopOrderId: ObjectId (required),
  broadcastedTo: [ObjectId] (ref: "User"),
  assignedTo: ObjectId (ref: "User"),
  status: String (enum: ["broadcasted", "assigned", "completed"]),
  acceptedAt: Date,
  timestamps: true
}
```

## 🧠 Core Concepts / Learning Highlights

### Authentication & Security
- **JWT Token Management** - Secure authentication with HTTP-only cookies
- **Google OAuth Integration** - One-tap login with Firebase Authentication
- **Password Hashing** - Bcrypt for secure password storage
- **OTP Verification** - Email-based password reset and delivery confirmation

### Real-time Features
- **Socket.io Implementation** - Real-time order updates and location tracking
- **Live Map Tracking** - React Leaflet integration for delivery tracking
- **Geospatial Queries** - MongoDB 2dsphere indexing for location-based searches

### Payment Processing
- **Razorpay Integration** - Secure online payment processing
- **Payment Verification** - Server-side payment validation
- **Multiple Payment Methods** - COD and online payment options

### State Management
- **Redux Toolkit** - Efficient state management with RTK Query
- **Custom Hooks** - Reusable logic for API calls and state updates
- **Context API** - Global state management for user authentication

### Database Design
- **MongoDB Schemas** - Well-structured data models with relationships
- **Geospatial Indexing** - Location-based queries for delivery assignment
- **Data Validation** - Mongoose schema validation and error handling

### File Management
- **Cloudinary Integration** - Image upload and optimization
- **Multer Middleware** - File upload handling
- **Image Processing** - Automatic image resizing and format conversion

## 🧾 Usage / How to Use

### For Customers
1. **Sign Up/Login** - Create account or use Google OAuth
2. **Browse Restaurants** - View available restaurants in your city
3. **Add to Cart** - Select items from multiple restaurants
4. **Checkout** - Choose payment method and delivery address
5. **Track Order** - Monitor real-time delivery progress
6. **Rate & Review** - Provide feedback after delivery

### For Restaurant Owners
1. **Create Shop** - Set up restaurant profile with details
2. **Add Menu Items** - Upload food items with images and prices
3. **Manage Orders** - Receive real-time order notifications
4. **Update Status** - Change order status (preparing, out for delivery)
5. **View Analytics** - Monitor order statistics and performance

### For Delivery Personnel
1. **Register as Delivery Boy** - Sign up with delivery role
2. **Receive Assignments** - Get notified of nearby delivery opportunities
3. **Accept Orders** - Choose delivery assignments
4. **Track Location** - Enable location sharing for customers
5. **Complete Delivery** - Verify delivery with OTP

## 🔮 Future Enhancements

### Planned Features
- **Push Notifications** - Mobile app notifications for order updates
- **Advanced Analytics** - Detailed reporting and insights dashboard
- **Multi-language Support** - Internationalization for global users
- **AI-powered Recommendations** - Personalized food suggestions
- **Social Features** - User reviews, ratings, and social sharing
- **Subscription Model** - Premium features for restaurants
- **Bulk Order Management** - Corporate catering solutions
- **Advanced Search** - Filter by cuisine, price range, ratings
- **Loyalty Program** - Points and rewards system
- **API Rate Limiting** - Enhanced security and performance

### Technical Improvements
- **Microservices Architecture** - Scalable service-oriented design
- **Redis Caching** - Improved performance with caching layer
- **Docker Containerization** - Easy deployment and scaling
- **CI/CD Pipeline** - Automated testing and deployment
- **Load Balancing** - Handle high traffic with load balancers
- **Database Optimization** - Query optimization and indexing
- **Security Enhancements** - Rate limiting, input validation, CORS policies

## 🧭 Acknowledgements / References

### APIs & Services
- [Razorpay Payment Gateway](https://razorpay.com/) - Payment processing
- [Cloudinary](https://cloudinary.com/) - Image management
- [Firebase Authentication](https://firebase.google.com/) - Google OAuth
- [OpenStreetMap](https://www.openstreetmap.org/) - Map tiles
- [React Leaflet](https://react-leaflet.js.org/) - Map components

### Libraries & Frameworks
- [React](https://reactjs.org/) - Frontend framework
- [Express.js](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Socket.io](https://socket.io/) - Real-time communication
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management

### Learning Resources
- [MongoDB Geospatial Queries](https://docs.mongodb.com/manual/geospatial-queries/)
- [Socket.io Documentation](https://socket.io/docs/)
- [React Leaflet Tutorial](https://react-leaflet.js.org/docs/start-introduction/)
- [Razorpay Integration Guide](https://razorpay.com/docs/)