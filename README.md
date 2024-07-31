# RESTfulAPI

This project is a RESTful API designed to handle basic CRUD operations for managing contact information. It is built using Node.js and Express, with MongoDB as the database.


## Table of Contents
- [Features](#features)
- [Code Overview](#code-overview)
  - [Languages and Frameworks](#languages-and-frameworks)
  - [Libraries and Tools](#libraries-and-tools)
  - [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [License](#license)
  
## Features

- Create, read, update, and delete contacts.
- Middleware to log request details.
- Body parsing for JSON requests.
- Static file serving.

## Code Overview

### Languages and Frameworks
- **JavaScript**: The primary language used for the API.
- **Node.js**: The runtime environment to execute JavaScript on the server side.
- **Express**: A web framework for Node.js used to build the API.

### Libraries and Tools
- **Express**: Handles the routing and middleware.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to manage data schemas.
- **Body-Parser**: Middleware to parse incoming request bodies in a middleware before handling them.
- **MongoDB**: A NoSQL database used to store contact information.

### Project Structure
- **index.js**: The main entry point of the application. It sets up the Express server, connects to MongoDB, and defines the routes.
- **src/routes/crmRoutes.js**: Defines the API endpoints and links them to controller functions.
- **src/controllers/crmControllers.js**: Contains the logic for handling CRUD operations for contacts.
- **src/models/crmModel.js**: Defines the schema for contact data using Mongoose.


## Endpoints
Here are the available endpoints:

- **GET /contact**  (Retrieves all contacts)
- **POST /contact**  (Creates a new contact)
- **GET /contact/:contactId**  (Retrieves a contact by ID)
- **PUT /contact/:contactId** (Updates a contact by ID)
- **DELETE /contact/:contactId**  (Deletes a contact by ID)


## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MaykaS/RESTfulAPI.git
   cd RESTfulAPI
   ```

2. **Install Dependencies**   

3. **Usage**

  To start using the API, ensure that your MongoDB server is running and the application is started. The API will be accessible at http://localhost:3000.

## Configuration
  No additional configuration is required. Ensure your MongoDB server is running and listening on the default port.

## Dependencies
- Express
- Mongoose
- Body-Parser

## License

This project is licensed under the MIT License 
