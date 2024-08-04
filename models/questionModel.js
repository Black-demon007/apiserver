const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
{
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true
  },

  QuestionText:{
    type: String,
    required: true
  },
    
  SetId:{
    type: String,
    required: true,
  },

  SetName:{
    type: String,
    required: true,
  },
  
  SubjectId:{
    type: String,
    required: true
  },
  
  SubjectName:{
    type: String,
    required: true
  }

});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;