const express = require("express")  ; 
const jwt = require("jsonwebtoken") ; 
const { JWT_TOKEN } = require("../config") ; 
const zod = require("zod") ; 
const User = require("../db");
const e = require("express");

const app = express() ;

const UserRouter = express.Router() ; 

const signupBody = zod.object({
  username : zod.string().email() , 
  firstname : zod.string().max(20) , 
  lastname : zod.string().max(20) ,
  password : zod.string().min(8) ,

})

UserRouter.post("/auth/signup",async (req,res)=>{
  try {
     const parseData = signupBody.safeParse(req.body) ; 

     // Validate the request body 

     if(!parseData.success){
      return res.status(400).json({
        message: "Invalid request body" , 
        errors : parseData.error.errors  
      })
     }

     // check if user already exist 
     const existingUser = await User.findOne({
      where : {
        username : req.body.username 
      }
     })

     if(existingUser){
      res.status(400).json({
        message : "User already exist" ,
      })
     }

     // putting user information in db 

     const user = await User.create({
      username : req.body.username , 
      password : req.body.password ,
      firstname : req.body.firstname ,
      lastname : req.body.lastname 
     })

     // generate jwt token 

     const token = jwt.sign({
      id : user_id 
     } , JWT_TOKEN) ; 

     res.json({
      message : "User created successfully" ,
      token : token 
     })

  } catch (error) {
    console.error("Error during signin",e) ; 
    res.status(400).json({
      message : "Error during signin" ,
    })
  }
})

UserRouter.post("/auth/signin",async (req,res)=>{

})

UserRouter.post("/auth/google",async(req,res)=>{
  
})
UserRouter.get("/auth/logout",async(req,res)=>{

})

UserRouter.get("/user/me" , async(req,res)=>{

})

UserRouter.put("/user/me", async(req,res)=>{
  
})

module.exports = UserRouter ; 