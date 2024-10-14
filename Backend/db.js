const mongoose = require("mongoose") ;  


mongoose.connect("mongodb+srv://aishlunatic001:KrishnaRadha@cluster0.rdppd.mongodb.net/Tracking-app").
then(
  ()=>{
    console.log("Connected to MongoDB") ; 
  }).catch(
    (err)=>{
      console.log("Error while connecting",err)
    }
  )  

  const userSchema = new mongoose.Schema({
    username : {
      type: String , 
      required : true , 
      unique : true , 
      trim : true 
} , 
    password : {
      type : String , 
      required : true , 
      unique : true , 
      trim : true 
    } , 

    firstname : {
      type : String ,
      required : true , 
      unique : true , 
      trim : true

    } ,
    lastname : {
      type : String , 
      required : true , 
      unique : true , 
      trim : true  
    }
})


const User = mongoose.model('User',userSchema) ; 

module.exports =  User ;  

