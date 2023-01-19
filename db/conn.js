const mongoose= require("mongoose");
const dotenv= require('dotenv');

dotenv.config({path:'./config.env'});
// db connection 
const DB=process.env.DATABASE;

// //for sercure api 
// const DB = process.env.DATABASE;
//
const connectdb =async()=>{
    await mongoose.connect(DB,{
        useNewUrlParser:true,
        useCreateIndex:true,
        undefinedTopology:true,
        useFindAndModify:false
    });
    console.log("db connected")
}
connectdb();

