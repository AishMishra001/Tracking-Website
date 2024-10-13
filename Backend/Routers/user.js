const express = require("express")  ; 
const jwt = require("jsonwebtoken") ; 
const { JWT_TOKEN } = require("../config")

const app = express() ;

const UserRouter = express.Router() ; 


UserRouter.post("/auth/signup",async (req,res)=>{

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