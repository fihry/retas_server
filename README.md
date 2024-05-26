# MERN Project Setup Guide

This guide provides step-by-step instructions on how to set up a MERN (MongoDB, Express.js, React.js, Node.js) project.

## Server Side Setup

1. **Install server-side dependencies**
    ```css
    npm install express mongoose cors dotenv
    npm install -g nodemon
    ```

2. **Create `server.js` file**
    - Import packages (express, cors, mongoose, dotenv)
    - Create server (use cors, use express.json())
    - Connect to db (mongoose.connect, mongoose.connection, mongoose.connection.once, mongoose.connection.on)
    - Import routes (import route file, use route file)
    - Create port
    - App.listen to port
    - Console.log

3. **Create `.env` file**
    - Define hidden variables (ex: PORT=5000, MONGO_URL=...)

4. **Create `.gitignore` file**
    - Add .env file to ignore list

5. **Create `models` folder**
    - Create model file (ex: UsersModel.js)
    - Define schema

6. **Create `routes` folder**
    - Create routes file (ex: routes/users.js)
    - Import express
    - Import model
    - Create router endpoints (get, post, put, delete)
    - Export router

7. **Create `config` folder**
    - Create config file (ex: config/db.js)
    - Import mongoose
    - Define connection

8. **Create `controllers` folder**
    - Create controller file (ex: controllers/users.js)
    - Import model
    - Create controller functions (getUsers, createUser, updateUser, deleteUser)
    - Export controller functions

## Client Side Setup

1. **Create a Vite project**
    ```css
    npm create vite@latest
    ```
    `or`
    ```css
    npm init vite@latest
    ```


2. **Install dependencies**
    ```css
    npm install
    npm install react-router-dom react-icons axios
    npm run dev
    ```

3. **Start the development server**

4. **Create `.env` file**
    - Define hidden variables (ex: VITE_API_URL=...)

5. **Create `.gitignore` file**
    - Add .env file to ignore list

6. **Create `components` folder**
    - Create component file (ex: components/Navbar.js)
    - Create component file (ex: components/Footer.js)

7. **Create `pages` folder**
    - Create page file (ex: pages/Home.js)
    - Create page file (ex: pages/About.js)
    - Create page file (ex: pages/Contact.js)

8. **Create `services` folder**
    - Create service file (ex: services/ApiHelper.js)
    - Import axios
    - Create axios instance
    - Export axios instance

9. **Create `routes` folder**
    - Create route file (ex: routes/index.js)
    - Import react-router-dom
    - Import pages
    - Create routes
    - Export routes

10. **Create `App.js` file**
    - Import react-router-dom
    - Import routes
    - Create routes

## Contributors
- Gitea : [melfihry](https://learn.zone01oujda.ma/git/melfihry)
- Github : [fihry](https://github.com/fihry)