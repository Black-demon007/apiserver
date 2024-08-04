const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
{
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true
  },
  
  SubjectId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },

  SubjectName:{
    type:String,
    required: true
  },
       
  CourseName:{
     type: String,
     required: true
  }

});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;