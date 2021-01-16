const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type : String, 
        required : true,
        max : 255,
        unique: true
    },
    fname:{
        type : String, 
        required : true,
        max : 255,

    },
    lname:{
        type : String, 
        required : true,
        max : 255,

    },
    email:{
        type : String, 
        required : true,
        max : 255,
        min : 6,
        unique: true
    },
     password:{
        type : String, 
        required : true,
        max : 1024,
        min : 6
    },
    date :{
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('user',userSchema);