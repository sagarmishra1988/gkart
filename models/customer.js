const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: false },
  mobile:{type:Number, required:false, unique:false},
  password: { type: String, required: true, minlength: 2 },
  // cpassword: { type: String, required: false, minlength: 2 },
  image: { type: String, required: false },
  
  orders: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Order' }]
});

customerSchema.plugin(uniqueValidator);

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer;