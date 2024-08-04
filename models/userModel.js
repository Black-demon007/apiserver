const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
   _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true
    },

    name:{
      type:String,
      required: true,
    },

    email:{
      type:String,
      unique:true,
      required: true,
    },

    mobile:{
      type: String,
      unique: true,
      required: true
    },
    
    role:{
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },

    password:{
      type:String,
      required: true,
    },

});

const User = mongoose.model('User', userSchema);
module.exports = User;