# Salon Management API

A RESTful API built using **Node.js, Express.js, Supabase, JWT, and bcryptjs** to manage salons, services, and user authentication.

##live link
https://salon-management-api-qmtw.onrender.com

## Technologies

* Node.js & Express.js
* Supabase
* bcryptjs
* JSON Web Token (JWT)
* dotenv
* Postman

## Features

* User registration and login
* Password hashing using bcrypt
* JWT authentication
* Salon CRUD operations
* Service CRUD operations
* Top 5 salons by rating
* Filter salons by city
* View available services
* Request logging
* Input validation and error handling

## API Endpoints

```text
POST   /register
POST   /login
GET    /
GET    /salons
GET    /salons/:id
POST   /salons
PUT    /salons/:id
DELETE /salons/:id

GET    /salons/:id/services
POST   /salons/:id/services
PUT    /services/:id
DELETE /services/:id

GET    /salons/top
GET    /salons/city/:city
GET    /services/available
```

Protected routes require:

```text
Authorization: Bearer <JWT_TOKEN>
```

## Project Structure

```text
controllers/
routes/
models/
middleware/
config/
server.js
.env
package.json
README.md
```

## Installation

```bash
npm install
npm run dev
```

Server runs on:

```text
http://localhost:4000
```

## Environment Variables

```env
PORT=4000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
JWT_SECRET=your_secret_key
```

API endpoints are tested using Postman.

**Author: Hazel Lakshmana**
