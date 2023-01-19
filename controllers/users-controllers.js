//  // // using images
// const uuid= require('uuid/v4')
const HttpError = require('../models/http-error')
const { validationResult } = require('express-validator');
const User= require('../models/user');
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken")
const dotenv= require('dotenv');
dotenv.config({path:'./config.env'});


const getUsers = async (req, res, next) => {
    let users;
    try {
      users = await User.find({}, '-password');
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({ users: users.map(user => user.toObject({ getters: true })) });
  };



  const getUsersById = async (req, res, next) => {    
    const userId= req.params.uid;
    let users;
    try {
      users = await User.findById(userId);
    } catch (err) {
      const error = new HttpError(
        'Fetching users failed, please try again later.',
        500
      );
      return next(error);
    }
    if(!users){
      const error = new HttpError(
        'user not found, please try later.',
        500
      );
      return next(error);
    }

    res.json({ users: users.toObject({ getters: true })});
  };




const createUser= async(req, res, next)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){
        const error= new HttpError('invalid input plz check', 500)
        return next(error)
    }

    const { name, email, mobile, password } = req.body;

    let existingUser;
    try {
      existingUser = await User.findOne({ email: email });
    } catch (err) {
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);
    }
  
    if (existingUser) {
      const error = new HttpError(
        'User exists already, please login instead.',
        422
      );
      return next(error);
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

    const createdUser = new User({
      name,
      email,
      // image: req.file.path,
      mobile,
      password: hashedPassword,
      places:[]
    });
  
    try {
      await createdUser.save();
    } catch (err) {
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);
    }

    //
    let token;
    try {
      token= jwt.sign(
        {userId: createdUser.id, email:createdUser.email},
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
  
    // res.status(201).json({ user: createdUser.toObject({ getters: true }) });
    
    res.status(201).json({userId: createdUser.id, email:createdUser.email, token:token});
  };






const login=async(req, res, next)=>{
    const{email, password}= req.body;

    let identifyuser
    try {
        identifyuser= await User.findOne({email:email})
    } catch (err) {
        const error= new HttpError('could not fetch')
    return next(error)
    }
if(!identifyuser){
    const error= new HttpError('user not found or password not match')
    return next(error)
}


let isValidpassword= false;
try {
  isValidpassword= await bcrypt.compare(password, identifyuser.password)
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
        {userId: identifyuser.id, email:identifyuser.email, name:identifyuser.name},
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

    
// /add cookies
res.cookie("jwt", token,{
   expires:new Date(Date.now() +2000000),                     //help in expire token//
   httpOnly:true                                           //customer not able to delete cookie
});
//

    // res.status(201).json({message:'login', user:identifyuser.toObject({getters:true})})
    
    res.json({userId: identifyuser.id,  token:token, email:identifyuser.email, name:identifyuser.name})
}





const updateUser= async(req, res, next)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){
        const error= new HttpError('invalid input plz check', 500)
        return next(error)
    }

    
    const{email, password, name, mobile}= req.body;
    const userId= req.params.uid;

    // let user
    // try {
    //   user= await User.findOne({email:email})
    // } catch (err) {
    //   const error= new HttpError('err', 500)
    //   return next(error)      
    // }
    // if(user.email === email){
    //   const error= new HttpError('email already exist', 500)
    //   return next(error)  
    // }


    let updateduser
    try {
        updateduser= await User.findById(userId)
    } catch (err) {
        const error= new HttpError('error', 500)
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
    updateduser.name= name;
    updateduser.mobile= mobile;
    updateduser.email= email;
    updateduser.password= hashedPassword;
    try {
      await  updateduser.save()
    } catch (err) {
        const error= new HttpError('not updated', 500)
        return next(error) 
    }   
    res.status(201).json({user:updateduser.toObject({getters:true})})
}


const deleteuser=async(req, res, next)=>{
    const userId= req.params.uid;

    let user
    try {
        user= await User.findById(userId)
    } catch (err) {
        const error= new HttpError('err', 500)
        return next(error)         
    }
    if(!user){
        const error= new HttpError('user not found ', 500)
        return next(error)    
    }

    try {
        user.remove()        
    } catch (err) {
        const error= new HttpError('user not found ', 500)
        return next(error)            
    }
    res.status(201).json({message:"deleted", user:user.toObject({getters:true})})
}


exports.getUsers= getUsers;
exports.getUsersById=getUsersById;
exports.createUser= createUser;
exports.login= login;
exports.updateUser= updateUser;
exports.deleteuser= deleteuser;


















