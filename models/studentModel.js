const mongoose = require('mongoose');

const studentScema = new mongoose.Schema(
{
   _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true
    },
    
    FullName:{
      type:String,
      required: true
    },
      
    Mobile:{
      type: String,
      required: true
    },
      
    Email:{
      type: String,
      required: true,
      unique: true
    },
      
    CollegeName:{
       type: String,
       required: true,
    },
       
    CollegeAddress:{
      type: String,
      required: true,
    },
      
    Degree:{
      type: String,
      required: true
    },
    
    DateOfBirth:{
      type: String,
      required: true
    },
    
    Password:{
      type: String,
      required: true
    }

});

const Student = mongoose.model("Student", studentScema);
module.exports = Student;