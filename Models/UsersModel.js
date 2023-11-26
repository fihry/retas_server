const mongoose = require('mongoose');
const NewShema = new mongoose.Schema({
    Firstname:String,
    Lastname:String,
    Username:String,
    Phone:String,
    Email:String,
    Password:String
},{timestamps:true});
const UsersModel = mongoose.model('users',NewShema);
module.exports = UsersModel;