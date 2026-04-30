const mongoose= require("mongoose");
const config = require("config");
const dotenv= require("dotenv").config();

// console.log(config.get("MONGODB_URI"))

mongoose.connect(`${process.env.MONGODB_URL}/st_backend_project`, {
    serverSelectionTimeoutMS: 5000
})
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})


module.exports= mongoose.connection;