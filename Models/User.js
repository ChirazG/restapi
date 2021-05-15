const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//  7. Create a models folder and a User.js file in it 
// 8. In User.js you must define a mongoose Schema and export the model , you will use it in the server.js

const UserSchema = new Schema({

    name: {
        type: String,
        required: true //required 
    }, 
    email: {
        type: String,
        required: true //required 
    },
    pasword: {
        type: String,
        required: true //required 
    },
})

//const User= mongoose.model('User', UserSchema)


module.exports = mongoose.model('User', UserSchema)