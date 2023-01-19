const HttpError = require("../models/http-error");
const {validationResult}= require('express-validator')
// const uuid= require('uuid/v4')
const Customer= require('../models/customer')
// const User= require('../models/user')
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken")

const dotenv= require('dotenv');
dotenv.config({path:'./config.env'});



const getCustomers = async (req, res, next) => {
    let customers;
    try {
      customers = await Customer.find({}, '-password');
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({ customers: customers.map(user => user.toObject({ getters: true })) });
  };


const getCustomerById=async(req, res, next)=>{
    const CustomerId= req.params.cid;

    let customer
    try {
        customer= await Customer.findById(CustomerId)
    } catch (err) {
        const error= new HttpError("customer not found by userid..",500)
        return next(error)       
    }
    if(!customer){
        const error= new HttpError("customer not found by userid",500)
        return next(error)
    }
    res.status(201).json({customer:customer.toObject({getters:true})})    
}


const signupCustomer=async(req, res, next)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){        
        const error= new HttpError("invalid input! please check",500)
        return next(error)
    }
    const{name, email, password, mobile}= req.body;    
    let identifycustomer
    try {
        identifycustomer= await Customer.findOne({email:email})
    } catch (err) {       
        const error= new HttpError("error in fetching data",500)
        return next(error)        
    }    
    if(identifycustomer ){               
        const error= new HttpError("email already present or pass not match! please check",500)
        return next(error)
    }

    
  ///
  let hashedPassword;
  try {
    hashedPassword= await bcrypt.hash(password, 12)
  } catch (err) {
    const error = new HttpError('could not create user, please try again.', 500)
    return next(error)
  }
///

    const createdCustomer= new Customer({
        // id:uuid(),
        name,
        email,
        // image:req.file.path,
        password: hashedPassword, 
        mobile,
        // cpassword,
        orders:[]
    })
    
    try {
        await createdCustomer.save()
    } catch (err) {
        const error= new HttpError("could not create customer",500)
        return next(error)
    }

    
    //
    let token;
    try {
      token= jwt.sign(
        {customerId: createdCustomer.id, email:createdCustomer.email},
        // 'abcdefghijklmnopqrstuvwxyzabcdefh',
        process.env.JWT_KEY,
        {expiresIn:'1h'}
      )
    } catch (err) {
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);      
    }
    
    
    
    //

    // res.status(201).json({customer: createdCustomer.toObject({getters:true})})
    
    res.status(201).json({customerId: createdCustomer.id, email:createdCustomer.email, tokenc:token});
}



const loginCustomer= async(req, res, next)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){        
        const error= new HttpError("invalid input! please check",500)
        return next(error)
    }

    const{email, password}= req.body;
    // const CustomerId= req.params.cid;
    let customer
    try {
        customer= await Customer.findOne({email:email})
    } catch (err) {               
        const error= new HttpError("customer not present or pass invalid! please check..",500)
        return next(error)        
    }    
    if(!customer ){               
        const error= new HttpError("customer not present or pass invalid! please check",500)
        return next(error)
    }    

    
let isValidpassword= false;
try {
  isValidpassword= await bcrypt.compare(password, customer.password)
} catch (err) {
  const error= new HttpError('could not log you in, please check your credentials and try again', 500)
  return next(error)  
}

if(!isValidpassword){
  const error= new HttpError('user not found or password not match')
  return next(error)
}


    //
    let token;
    try {
      token= jwt.sign(
        {userId: customer.id, email:customer.email, name:customer.name},
        // 'abcdefghijklmnopqrstuvwxyzabcdefh',
        process.env.JWT_KEY,
        {expiresIn:'1h'}
      );
    } catch (err) {
      const error = new HttpError(
        'login failed, please try again later.',
        500
      );
      return next(error);      
    }
    // console.log(token)
    
    
    //

    // res.status(201).json({customer:customer.toObject({getters:true})})
    
    res.json({customerId: customer.id,  tokenc:token, email:customer.email, name:customer.name})
}




const updateCustomer= async(req, res, next)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){        
        const error= new HttpError("invalid input! please check",500)
        return next(error)
    }

    const{name, email, password, mobile}= req.body;
    const CustomerId= req.params.cid;

    let updatedCustomer
    try {
        updatedCustomer= await Customer.findById(CustomerId)
    } catch (err) {       
        const error= new HttpError("error email not match",500)
        return next(error) 
    }
    if(!updatedCustomer){
        const error= new HttpError("could not find customer",500)
        return next(error)  
    }


      //
      let hashedPassword;
      try {
        hashedPassword= await bcrypt.hash(password, 12)
      } catch (err) {
        const error = new HttpError('could not create user, please try again.', 500)
        return next(error)
      }
  
  //

    updatedCustomer.name= name
    updatedCustomer.email= email
    updatedCustomer.mobile=mobile
    updatedCustomer.password= hashedPassword
    // updatedCustomer.cpassword= cpassword

    try {
        await updatedCustomer.save()
    } catch (err) {
        const error= new HttpError("error ",500)
        return next(error)         
    }
    res.status(201).json({message:"updated"})
}




const deleteCustomer= async(req, res, next)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){        
        const error= new HttpError("invalid input! please check",500)
        return next(error)
    }
    const CustomerId= req.params.cid;
    let customer 
    try {
        customer= await Customer.findById(CustomerId)
    } catch (err) {       
        const error= new HttpError("customer not found...",500)
        return next(error)        
    }
    if(!customer){   
        const error= new HttpError("customer not found",500)
        return next(error)    
    }
    console.log(customer)
    try {
        await customer.remove()
    } catch (err) {
        const error= new HttpError("err",500)
        return next(error)      
        
    }
    res.status(201).json({message:"deleted"})
}



exports.getCustomerById= getCustomerById;
exports.signupCustomer= signupCustomer;
exports.loginCustomer= loginCustomer;
exports.updateCustomer= updateCustomer;
exports.deleteCustomer= deleteCustomer;
exports.getCustomers = getCustomers;