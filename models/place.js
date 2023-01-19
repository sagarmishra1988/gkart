const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: false },
  name: { type: String, required: false },
  price:{type:Number, required:false},
  creator: { type: mongoose.Types.ObjectId, required: false, ref: 'User' },
  
  // customercreator: { type: mongoose.Types.ObjectId, required: false, ref: 'Customer' }
// creator:{type:String, required:true}

});

const Place= mongoose.model('Place', placeSchema)
module.exports = Place;