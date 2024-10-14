const express = require("express")  ; 
const jwt = require("jsonwebtoken") ; 
const { JWT_TOKEN } = require("../config") ; 
const zod = require("zod") ; 

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

  } catch (error) {
    
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