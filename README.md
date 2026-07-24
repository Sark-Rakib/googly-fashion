<div align="center">

# GOOGLY FASHION

**A full-stack e-commerce platform built with the MERN stack**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Googly_Fashion-071827?style=for-the-badge&logo=vercel&logoColor=white)](https://googly-fashionn.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Overview

Googly Fashion is a modern, full-featured e-commerce platform for fashion retail. It includes a responsive storefront, a comprehensive admin dashboard, role-based access control, and a complete order management system.

## Live Links

| Link | URL |
|------|-----|
| **Storefront** | [googly-fashionn.vercel.app](https://googly-fashionn.vercel.app/) |
| **Admin Dashboard** | [googly-fashionn.vercel.app/dashboard](https://googly-fashionn.vercel.app/dashboard) |

## Features

### Storefront
- Hero section with countdown flash sale timer
- Category browsing with product filtering
- Featured / trending products section
- New arrivals with multi-category filtering
- Product detail pages with image gallery, reviews, and related products
- Responsive design (mobile, tablet, desktop)
- Product search with instant results
- Order tracking by order ID

### Shopping Cart & Checkout
- Add to cart with size and color selection
- Quantity management
- Server-side cart persistence (logged-in users)
- Local cart for guest users
- Order placement with multiple payment methods
- Order confirmation page

### User Authentication
- JWT-based authentication (register / login)
- Role-based access control (customer / admin)
- Protected routes with automatic redirection
- Profile management

### Reviews System
- Submit reviews without login (name required)
- Star rating system (1-5)
- Collapsible review section on product pages
- Delete own reviews (logged-in users)

### Admin Dashboard
- Overview with order statistics
- Full product CRUD (create, read, update, delete)
- Multi-image upload via ImageBB
- Order management (status + payment status updates)
- User management (role changes, deletion)
- Role-based sidebar navigation

### Additional Pages
- About, Our Story, Careers, Press Releases
- Contact form with toast confirmation
- FAQs with expandable sections
- Shipping, Returns, Payment info pages
- Gift Cards, Rewards Program, Installment Payment
- Terms, Privacy, Cookie, IP, Anti-Counterfeit policies
- Warehouse locations (5 cities)
- Seller programs (Sell On Googly, Wholesale, Affiliate, Brand Registry)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19, React Router 7, Vite 8, Tailwind CSS 4 |
| **Backend** | Node.js, Express 4, Mongoose 8 |
| **Database** | MongoDB Atlas |
| **Auth** | JWT (jsonwebtoken + bcryptjs) |
| **Image Hosting** | ImageBB API |
| **Deployment** | Vercel (frontend + serverless API) |
| **Icons** | Lucide React, React Icons |
| **Animation** | Framer Motion, Swiper |

---

## Project Structure

```
googly-fashion/
├── api/
│   └── index.js                  # Vercel serverless entry point
├── server/
│   ├── config/db.js              # MongoDB connection
│   ├── controllers/              # Route handlers
│   │   ├── authController.js     # Register, login, profile, users
│   │   ├── cartController.js     # Cart CRUD
│   │   ├── orderController.js    # Orders + tracking
│   │   ├── productController.js  # Products + search/filter
│   │   └── reviewController.js   # Reviews + rating aggregation
│   ├── middleware/auth.js        # JWT verification, role check
│   ├── models/                   # Mongoose schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   ├── CartItem.js
│   │   └── Review.js
│   ├── routes/                   # Express routes
│   └── scripts/                  # Seed data scripts
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── DashboardLayout.jsx   # Admin/customer sidebar
│   │   ├── Navbar.jsx            # Main navigation
│   │   ├── TopNavbar.jsx         # Top bar (delivery info)
│   │   ├── ProtectedRoute.jsx    # Auth guard
│   │   └── home/                 # Homepage sections
│   ├── context/                  # React Context providers
│   │   ├── AuthContext.jsx       # JWT auth state
│   │   ├── CartContext.jsx       # Cart state + API
│   │   ├── LanguageContext.jsx   # i18n translations
│   │   └── ToastContext.jsx      # Toast notifications
│   ├── pages/                    # Route pages (40+)
│   ├── services/                 # API service layer
│   │   ├── productService.js
│   │   ├── orderService.js
│   │   └── config.js
│   └── Root.jsx                  # Route definitions
├── vercel.json                   # Vercel deployment config
├── vite.config.js                # Vite + Tailwind config
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account (or local MongoDB)
- ImageBB API key ([get one here](https://api.imgbb.com/))

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/googly-fashion.git
cd googly-fashion

# Install frontend dependencies
npm install

# Install server dependencies
cd server && npm install && cd ..
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Frontend
VITE_IMAGEBB_API_KEY=your_imagebb_api_key

# Backend (server/.env)
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/googly-fashion
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
IMAGEBB_API_KEY=your_imagebb_api_key
PORT=5000
```

### Running Locally

```bash
# Terminal 1 — Backend
cd server
npm run dev

# Terminal 2 — Frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Seed Data

```bash
# Seed sample products and orders
cd server
npm run seed

# Create admin user (admin@googly.com / admin123)
npm run seed-admin
```

---

## API Endpoints

### Auth
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login | Public |
| GET | `/api/auth/me` | Get current user | Required |
| PUT | `/api/auth/profile` | Update profile | Required |
| GET | `/api/auth/users` | List all users | Admin |
| PUT | `/api/auth/users/:id/role` | Update user role | Admin |
| DELETE | `/api/auth/users/:id` | Delete user | Admin |

### Products
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/products` | List products (search, filter) | Public |
| GET | `/api/products/:id` | Get product by ID | Public |
| GET | `/api/products/slug/:slug` | Get product by slug | Public |
| POST | `/api/products` | Create product | Admin |
| PUT | `/api/products/:id` | Update product | Admin |
| DELETE | `/api/products/:id` | Delete product | Admin |

### Orders
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/orders/track` | Track order by ID | Public |
| POST | `/api/orders` | Create order | Required |
| GET | `/api/orders/user/orders` | Get user orders | Required |
| GET | `/api/orders` | Get all orders | Admin |
| PUT | `/api/orders/:orderId/status` | Update order status | Admin |
| PUT | `/api/orders/:orderId/payment` | Update payment status | Admin |

### Cart
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/cart` | Get cart items | Required |
| POST | `/api/cart` | Add to cart | Required |
| PUT | `/api/cart/:id` | Update quantity | Required |
| DELETE | `/api/cart/:id` | Remove item | Required |
| DELETE | `/api/cart` | Clear cart | Required |

### Reviews
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/reviews/product/:productId` | Get reviews for product | Public |
| POST | `/api/reviews` | Create review | Optional |
| DELETE | `/api/reviews/:id` | Delete review | Required |

---

## Deployment

This project is deployed on **Vercel** with the frontend as a static site and the Express backend as a serverless function.

### Vercel Configuration

```json
{
  "installCommand": "npm install",
  "buildCommand": "npx vite build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api" },
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

### Environment Variables (Vercel Dashboard)

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `CLIENT_URL` | `https://googly-fashionn.vercel.app` |
| `IMAGEBB_API_KEY` | ImageBB API key |
| `VITE_IMAGEBB_API_KEY` | ImageBB API key (client-side) |

---

## License

This project is for educational purposes.

---

<div align="center">

**Built with React, Express, MongoDB, and Tailwind CSS**

</div>
