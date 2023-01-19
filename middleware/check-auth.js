// const HttpError= require('../models/http-error')
// const jwt = require('jsonwebtoken')

// module.exports= (req, res, next)=>{
    // if(req.method === 'OPTIONS'){
    //     return next()
    // }
//     try {
//         const token =  req.headers.authorization.split(' ')[1];

//     if(!token){
//         throw new Error('authentication failed')
//     }
//        const decodedToken= jwt.verify(token, 'abcdefghijklmnopqrstuvwxyzabcdefh');
//        req.userData = {userId: decodedToken.userId}
//        next();
//     } catch (err) {
//         const error= new HttpError('authentiction failed...', 401)
//         return next(error)        
//     }
// }
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    
    if (!token) {
      throw new Error('Authentication failed!');
    }
    console.log(token)
    const decodedToken = jwt.verify(token, 'abcdefghijklmnopqrstuvwxyzabcdefh');
    req.userData = { userId: decodedToken.userId };
     next();
  } catch (err) {
    const error = new HttpError('Authentication failed!', 401);
    return next(error);
  }
};
