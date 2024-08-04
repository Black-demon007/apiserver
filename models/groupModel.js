const mongoose = require('mongoose');

const setSchema = new mongoose.Schema(
{
   _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true
    },
      
    GroupName:{
      type: String,
      required: true
    }, 
       
    GroupCode:{
       type: String,
       required: true
    },
       
    NumberOfStudents:{
       type: String,
       required: true
    }
});


const Group = mongoose.model("Group", setSchema);
module.exports = Group;