const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    name: { type: String,	
            required : true},
    age: { type : Number,
            min :2,
            required: true}
});

//'user' = used to create in MongoDB, the collection 'users' ( ='user'+'s' added automatically)
module.exports = mongoose.model("user", UserModel); // create the model to read/write into the MongoDB collection 'users'
