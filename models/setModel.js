const mongoose = require('mongoose');

const setSchema = new mongoose.Schema(
{
   _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true
    },
      
    subjectId:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Subject"    
    }, 
       
    subjectName:{
       type: String,
       required: true
    },
       
    setName:{
       type: String,
       required: true
    },
    
    setPrice:{
       type: Number,
       required: true
    }

});


const Set = mongoose.model("Set", setSchema);
module.exports = Set;