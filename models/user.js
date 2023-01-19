const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: false, unique: false },
  password: { type: String, required: true, minlength: 2 },
  image: { type: String, required: false },
  places: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Place' }],
// places:{type:String}
// token:[{
//             token:{
//                 type:String,
//                 required:true
//             }
//         }]
});

userSchema.plugin(uniqueValidator);



const User = mongoose.model('User', userSchema)
module.exports = User;