const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Routes = require('./Routes/crudRoutes.js');
const app = express();
const _Port = process.env.PORT;
 const user= process.env.USER;
 const password= process.env.PASSWORD;
const model= process.env.MODEL;
// middlewares
app.use(express.json());
app.use(cors());
// connect to mongodb
app.connect = mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.xz7i3rg.mongodb.net/${model}?retryWrites=true&w=majority`)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error(`Could not connect to MongoDB..`));
// routes
app.use('/api',Routes);
//>> default route
app.get('/api',(req,res)=>{res.send('Welcome to my CRUD API');})
//>> error route
app.get('*',(req,res)=>{res.send('404 Page not found');})
// listen to port
app.listen(_Port,()=>{
    console.log(`http://localhost:${_Port}`)
})
