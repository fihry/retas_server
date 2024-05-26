1 Steps to create a MERN project

###                    ++++++++++++++++++++++++++++++++||server_Side||++++++++++++++++++++++++++++++++
# Step 1: Install server-side dependencies
```css
             |__ npm install express --save
             |__ npm install mongoose
             |__ npm install -g nodemon
             |__ npm install cors
             |__ npm install dotenv --save
```
# Step 2:  create server.js file
```css
             |__ import packages
             |     |__ import express
             |     |__ import cors
             |     |__ import mongoose
             |     |__ import dotenv (for hidden variables)
             |__ create server
             |     |__ use cors
             |     |__ use express.json()
             |__ connect to db
             |     |__ mongoose.connect
             |     |__ mongoose.connection
             |     |__ mongoose.connection.once
             |     |__ mongoose.connection.on
             |__ import routes
             |     |__ import route file (ex: const usersRouter = require('./routes/users'))
             |     |__ use route file (ex: app.use('/users', usersRouter))
             |__ create port
                   |__ app.listen to port
                   |__ console.log    (ex: console.log(`Server is running on port ${port}`))
```
# Step 3: Create .env file
            |__ define hidden variables (ex: PORT=5000, MONGO_URL=...)
# Step 4: Create .gitignore file
            |__ add .env file to ignore list
# Step 5: Create models folder
            |__ create model file (ex: UsersModel.js)
            |__ define schema
# Step 6: Create routes folder
            |__ create routes file (ex: routes/users.js)
            |__ import express
            |__ import model (ex: const UsersModel = require('../models/UsersModel'))
            |__ create router endpoints (get, post, put, delete)
            |__ export router
# Step 7: Create config folder
            |__ create config file (ex: config/db.js)
            |__ import mongoose
            |__ define connection
# Step 8: Create controllers folder

            |__ create controller file (ex: controllers/users.js)
            |__ import model (ex: const UsersModel = require('../models/UsersModel'))
            |__ create controller functions (ex: getUsers, createUser, updateUser, deleteUser)
            |__ export controller functions (ex: module.exports = {getUsers, createUser, updateUser, deleteUser})         
###                   ++++++++++++++++++++++++++++++++||Client_Side||++++++++++++++++++++++++++++++++
# Step 1: Create a Vite project
            |__ npm create vite@latest
            [or]
            |__ npm init vite@latest
# Step 2: Install dependencies
            |__ npm install
            |__ npm install react-router-dom
            |__ npm install react-icons --save
            |__ npm install axios
            |__ npm run dev
# Step 3: Start the development server
# Step 4: Create .env file
            |__ define hidden variables (ex: VITE_API_URL=...)
# Step 5: Create .gitignore file
            |__ add .env file to ignore list
# Step 6: Create components folder
            |__ create component file (ex: components/Navbar.js)
            |__ create component file (ex: components/Footer.js)
# Step 7: Create pages folder
            |__ create page file (ex: pages/Home.js)
            |__ create page file (ex: pages/About.js)
            |__ create page file (ex: pages/Contact.js)
# Step 8: Create services folder
            |__ create service file (ex: services/ApiHelper.js)
            |__ import axios
            |__ create axios instance (ex: const api = axios.create({baseURL: process.env.VITE_API_URL}))
            |__ export axios instance (ex: export default api)
# Step 9: Create routes folder
            |__ create route file (ex: routes/index.js)
            |__ import react-router-dom
            |__ import pages (ex: import Home from '../pages/Home')
            |__ create routes (ex: <Route exact path="/" component={Home} />)
            |__ export routes (ex: export default routes)
# Step 10: Create App.js file
            |__ import react-router-dom
            |__ import routes (ex: import routes from './routes/index')
            |__ create routes (ex: <BrowserRouter>{routes}</BrowserRouter>)

## Contributors
- Gitea : [melfihry](https://learn.zone01oujda.ma/git/melfihry)
- Github : [fihry](https://github.com/fihry)
- Created at : 2023/11/25
