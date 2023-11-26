const express = require('express');
const router = express.Router();
const UsersModel = require('../Models/UsersModel.js');
// get all users
router.get('/users',async(req,res)=>{
    const allUsers = await UsersModel.find();
    res.send(allUsers);
})
// get user by id
router.get('/users/:id',async(req,res)=>{
    const user = await UsersModel.findById(req.params.id);
    res.send(user);
}) 
// add new user
router.post('/newusers',async(req,res)=>{
    const newUser = new UsersModel({
        Firstname:req.body.firstname,
        Lastname:req.body.lastname,
        Username:req.body.username,
        Phone:req.body.phone,
        Email:req.body.email,
        Password:req.body.password
    })
    await newUser.save();
    res.send(newUser);
    console.log('new user added');
})
// update user by id
router.put('/updateusers/:id',async(req,res)=>{
    const user = await UsersModel.findById(req.params.id);
    user.Firstname = req.body.firstname;
    user.Lastname = req.body.lastname;
    user.Username = req.body.username;
    user.Phone = req.body.phone;
    user.Email = req.body.email;
    user.Password = req.body.password;

    await user.save();
    res.send(user);
    console.log('user updated');
})
// delete user by id
router.delete('/deleteusers/:id',async(req,res)=>{
    const user = await UsersModel.findByIdAndDelete(req.params.id);
    res.send(user);
    console.log('user deleted');
})
module.exports = router;
