
# MiniWhatspp

This mini-project is a chat application built using Node.js, Express.js, and MongoDB, inspired by WhatsApp's chat functionality. The primary goal was to gain hands-on experience with database integration, backend development, and RESTful API creation. While the project does not include real-time messaging and user validation, it effectively implements CRUD operations to manage chat functionalities.






## Features

**Create, Read, Update, Delete (CRUD) Operations**: The application supports basic CRUD operations for managing chat messages between users.

**RESTful APIs**: Utilizes Express.js to build RESTful APIs for handling chat-related operations.

**MongoDB Integration**: MongoDB serves as the database for storing user messages.

**Error Handling**: Robust error handling mechanisms to ensure the application provides appropriate feedback and handles exceptions gracefully.

## Tech Stack

**Node.js**: JavaScript runtime for building server-side applications.

**Express.js**: Web framework for Node.js to create RESTful APIs.

**MongoDB**: NoSQL database for storing chat data.

**Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js

## Project Structure
The project structure is organized to separate concerns and enhance maintainability:

``` bash

chat-app/
│
├── config/
│   └── database.js      # MongoDB connection configuration
│
├── controllers/
│   └── chatController.js # Logic for handling chat-related operations
│
├── models/
│   └── chatModel.js     # Mongoose schema and model for chat messages
│
├── routes/
│   └── chatRoutes.js    # API routes for chat operations
│
├── app.js               # Main application file
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

**config/database.js**
Handles the MongoDB connection using Mongoose.

**models/chatModel.js**
Defines the Mongoose schema and model for chat messages.

**controllers/chatController.js**
Contains the logic for handling chat-related CRUD operations.

**routes/chatRoutes.js**
Defines the API routes for chat operations.

**app.js**
Main application file to set up the server and routes.
## Code
## Installation
 Clone the repository:

```bash
 

git clone https://github.com/yourusername/chat-app.git
cd chat-app
```
Install dependencies:
```bash
npm install
```
Set up environment variables:
Create a .env file in the root directory and add the following:

```bash
makefile

MONGO_URI=your_mongodb_connection_string
```
Run the application:
```bash
npm start
```