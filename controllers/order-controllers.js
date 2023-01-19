// using image 
const fs= require('fs')
const HttpError= require('../models/http-error');
// const uuid = require('uuid/v4');
const mongoose= require('mongoose')
const {validationResult}= require('express-validator')
const Order= require('../models/order')
const Customer= require('../models/customer')
const User= require('../models/user');
const Finalorder = require('../models/finalorder');


const getOrder = async (req, res, next) => {
  let orders;
  try {
    orders = await Order.find({});
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ orders: orders.map(order => order.toObject({ getters: true })) });
};


const getOrderById= async(req, res, next)=>{
    const orderId= req.params.oid;    
    let order
    try{
        order= await Order.findById(orderId)
    }catch(err){
        const error= new HttpError('could not find order by id', 500)
        return next(error)
    }
    
    if(!order){
        const error= new HttpError('order not found', 500)
        return next(error)
    }     
    res.status(201).json({order:order.toObject({getters: true })})
}



const getOrderByCustomerId=async(req, res, next)=>{
    const customerId= req.params.cid;
    let customerorder
    try{
        customerorder= await Customer.findById(customerId).populate('orders');
    }catch(err){
        const error= new HttpError('could not find orders by userid', 500)
        return next(error)
    }    
    
    if(!customerorder || customerorder.length===0){
        const error= new HttpError('order not found', 500)
        return next(error)
    }  

    res.status(201).json({orders:customerorder.orders.map(p=>p.toObject({getters:true}))})
}


const getOrderByProductcreatorId=async(req, res, next)=>{
  const userId= req.params.uid;
  let customerorder
  try{
      customerorder= await Order.find({productcreator:userId});
  }catch(err){
      const error= new HttpError('could not find orders by userid', 500)
      return next(error)
  }    
  
  if(!customerorder || customerorder.length===0){
      const error= new HttpError('order not found', 500)
      return next(error)
  }  

  res.status(201).json({orders:customerorder.map(p=>p.toObject({getters:true}))})
}



const createOrder= async (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
    
    const{title, description, creator, amount,ordercreator, price, productcreator, image}= req.body;

    const createdOrder= new Order({
        // id: uuid(),
        productcreator,
        title:title,
        amount:amount,
        description:description,             
        price:price,
        // quantity,   
        image:image, // => File Upload module, will be replaced with real image url    
        creator:creator,
        ordercreator:ordercreator
    });
    
  let customer;
  try {
    customer = await Customer.findById(creator);
  } catch (err) {
    const error = new HttpError(
      'Creating order failed, please try again.../',
      500
    );
    return next(error);
  }
  // console.log(customer.orders)
  if (!customer) {
    const error = new HttpError('kindly login for new order', 404);
    return next(error);
  }
  console.log(customer)

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdOrder.save({ session: sess }); 
    customer.orders.push(createdOrder); 
    await customer.save({ session: sess }); 
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating order failed, please try again..',
      500
    );
    return next(error);
  }    


  // ////
  
  let order;
  try {
    order = await Finalorder.findById(ordercreator);
  } catch (err) {
    const error = new HttpError(
      'Creating order failed, please try again...',
      500
    );
    return next(error);
  }
  // console.log(customer.orders)
  if (!order) {
    const error = new HttpError('kindly login for new order', 404);
    return next(error);
  }
  console.log(order)

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdOrder.save({ session: sess }); 
    order.orders.push(createdOrder); 
    await order.save({ session: sess }); 
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating order failed, please try again..',
      500
    );
    return next(error);
  }    

    res.status(201).json({order:createdOrder})
    
}



const createfinalOrder= async (req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  
  const{creator, ordercreator}= req.body;

  const createdOrder= new Order({
      creator:creator,
      ordercreator:ordercreator
  });
  
// ////

let order;
try {
  order = await Finalorder.findById(ordercreator);
} catch (err) {
  const error = new HttpError(
    'Creating order failed, please try again...',
    500
  );
  return next(error);
}
console.log(order)
if (!order) {
  const error = new HttpError('kindly login for new order!!', 404);
  return next(error);
}
console.log(order)

try {
  const sess = await mongoose.startSession();
  sess.startTransaction();
  await createdOrder.save({ session: sess }); 
  order.orders.push(createdOrder); 
  await order.save({ session: sess }); 
  await sess.commitTransaction();
} catch (err) {
  const error = new HttpError(
    'Creating order failed, please try again..',
    500
  );
  return next(error);
}    

  res.status(201).json({order:createdOrder})
  
}



const updateOrder= async(req, res, next)=>{
    const error= validationResult(req);
    if(!error.isEmpty()){
        const error= new HttpError('invalid input updated', 500)
        return next(error)
    }
    const{amount}= req.body;
    const orderId= req.params.oid;

    let updatedorder
    try {
        updatedorder=await Order.findById(orderId)        
    } catch (err) {
        const error= new HttpError('could not find id or update', 500)
        return next(error)
    }
    if(!updatedorder){
        
        const error= new HttpError('could not find id', 500)
        return next(error)
    }
    // updatedorder.title= title;
    updatedorder.amount= amount;

    try{
        await updatedorder.save()
    }catch(err){
        const error= new HttpError('could not updated order', 500)
        return next(error)
    }
    res.json({updatedorder:updatedorder.toObject({getters:true})})
}





const deleteOrder= async(req, res, next)=>{
    const orderId= req.params.oid;

let order
try{
    order = await Order.findById(orderId).populate('creator');
}catch(err){
    const error= new HttpError('could not fetch...', 500)
        return next(error)
}
if(!order){    
    const error= new HttpError('could not find order', 500)
        return next(error)
}
console.log(order)

// const imagePath= order.image
try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await order.remove({session: sess});
    order.creator.orders.pull(order);
    await order.creator.save({session: sess});
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete order.',
      500
    );
    return next(error);
  }

  // image 
  // fs.unlink(imagePath, err=>{
  //   console.log(err)
  // })
///////////////
  res.status(200).json({ message: 'Deleted order.' });
};


exports.getOrderById = getOrderById;
exports.getOrderByCustomerId = getOrderByCustomerId;
exports.createOrder = createOrder;
exports.updateOrder= updateOrder;
exports.deleteOrder= deleteOrder
exports.getOrder= getOrder
exports.getOrderByProductcreatorId =getOrderByProductcreatorId
exports.createfinalOrder= createfinalOrder
// exports.getOrderCustomerCreatorId= getOrderCustomerCreatorId




