const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const createError = require('../utils/appError');

exports.signup = async(req, res, next) =>{
  try {
    const userEmail = await User.findOne( {email: req.body.email} );   
    if(userEmail){
      return next(new createError("Email Already Exists", 400));   
    }
    
    const userMobile = await User.findOne( {mobile: req.body.mobile} );
    if(userMobile){
      return next(new createError("Mobile Already Exists", 400));   
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
    });

    const token = jwt.sign({_id: newUser._id}, process.env.TOKEN_KEY,{
      expiresIn: process.env.EXPIRY
    });
          
    res.status(200).json({
        status: 'success',
        message: 'User Registered Sucessfully',
        token,
        user:{
          _id:newUser._id,
          name: newUser.name,
          email:newUser.email,
          role:newUser.role,
        }
      });
    }
   
  catch(error){
    next(error)   
  }
};



exports.login = async(req, res, next) =>{
   try {
    const{email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return next(new createError("User Not Found", 404));
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return next(new createError("Invalid Email Or Password", 401));
    }

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_KEY,{
        expiresIn: process.env.EXPIRY,
    });
      
    res.status(200).json({
         status: 'success',
         token,
         message: 'Login Sucessfully',
         user:{
          _id:user._id,
          name: user.name,
          email:user.email,
          role:user.role,   
        },
      });
    }
  
   catch(error){
      next(error);
   }
}