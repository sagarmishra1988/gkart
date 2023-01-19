const fs= require('fs')
const express= require('express');
const app= express();
const path= require('path')
const bodyParser= require('body-parser')
const placesRoutes = require('./routes/places-routes')
const usersRoutes = require('./routes/users-routes')
const customersRoutes= require('./routes/customer-routes')
const orderRoutes= require('./routes/order-routes')
const finalorderRoutes= require('./routes/finalorder-routes ')
// const cookieParser= require("cookie-parser");
require('./db/conn')


// app.use(cookieParser());



//


app.use(bodyParser.json())

app.use('/uploads/images', express.static(path.join('uploads', 'images')))

//
app.use(express.static(path.join(__dirname,'./frontend/build')))

//


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/orders', orderRoutes)
app.use('/api/finalorder', finalorderRoutes)



app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})
// //
// app.use((req, res, next)=>{
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route.', 404);
//   throw error;
// });


app.use((error, req, res, next) => {
  // for image 
  if(req.file){
    fs.unlink(req.file.path, (err)=>{
      console.log(err)
    })
  }
///////////////

  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({ message: error.message || 'An unknown error occurred!' });
});

const port= process.env.PORT || 8000;


app.listen(port, ()=>{
  console.log(`server starts at port no. ${port}`)
})
