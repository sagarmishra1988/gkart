const mongoose = require('mongoose');

const finalorderSchema = new mongoose.Schema(
{
  orders: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Order' }],
  creator: { type: mongoose.Types.ObjectId, required: false, ref: 'Customer' },  
  // productcreator:{ type: mongoose.Types.ObjectId, required: false, ref: 'Order' },
  // paymentId:{type:String, required:false}
}
);

const Finalorder= mongoose.model('Finalorder', finalorderSchema)
module.exports = Finalorder;