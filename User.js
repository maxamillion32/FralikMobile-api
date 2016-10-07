var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    username : {type: String, unique: true},
    email    : {type: String, lowercase: true, unique: true, required: true},
    password : {type: String},
    /*role: {type: String, enum: ['children', 'parent'], default: 'parent'},*/
    isactive :  {type: Boolean, default: true}
},
    {timestamp: true
    }
);

var User = mongoose.model('users'/*Collection name*/, userSchema);
module.exports = User;