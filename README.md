# syook-Logistics Management System
This Logistics Management System is a software solution designed to streamline the operations of a logistics company. It allows you to manage vehicles, items, orders, and customers efficiently. Below, you'll find information on how to use and interact with the system.

Table of Contents
Getting Started
API Endpoints
Customers
Items
Delivery Vehicles
Orders
Authentication
Logging
Unit Tests
Getting Started
To get started with this logistics management system, you'll need to set up the environment and run the server.

Clone this repository.
Install the required dependencies using npm install.
Create a .env file with your MongoDB connection URL and any other environment variables you need.
Run the server using npm start.
API Endpoints
Customers
GET /customer
Retrieve a list of all customers.
POST /customer_order
Create a new customer.
Request Body: { "name": "Customer Name", "city": "Customer City", "email": "customer@email.com", "password": "customerPassword" }
Items
GET /item
Retrieve a list of all items.
POST /item_order
Create a new item.
Request Body: { "name": "Item Name", "price": 10.99 }
PATCH /item/:id
Update an existing item by ID.
Request Body: { "name": "Updated Item Name", "price": 15.99 }
Delivery Vehicles
GET /vehicle
Retrieve a list of all delivery vehicles.
POST /add_vehicle
Add a new delivery vehicle.
Request Body: { "registrationNumber": "ABC123", "vehicleType": "bike", "city": "Vehicle City", "image": "vehicleImage.jpg" }
Orders
GET /order
Retrieve a list of all orders.
POST /order_post
Create a new order.
Request Body: { "city": "Customer City", "price": 10.99, "itemId": "itemID", "customerId": "customerID" }
Note: This endpoint assigns a delivery vehicle based on city matching and availability.
PUT /order/:id
Mark an order as delivered.
Request Body: { "isDelivered": true }
