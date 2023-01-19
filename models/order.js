const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
{
  title: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: false },
  name: { type: String, required: false },
  amount:{type:String, required:false},
  price:{type: Number, required: false},
  productcreator:{type:String, required:false},
  quantity:{type: Number, required: false},
  creator: { type: mongoose.Types.ObjectId, required: false, ref: 'Customer'},
  ordercreator: { type: mongoose.Types.ObjectId, required: false, ref: 'Finalorder' },
  
}
);

const Order= mongoose.model('Order', orderSchema)
module.exports = Order;