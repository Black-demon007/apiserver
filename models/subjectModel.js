const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
{
  _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true
   },

   subjectName:{
      type:String,
      required: true
   }

});

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;