const express = require("express") ; 
const UserRouter = require("./user");
const jwt = require("jsonwebtoken") ; 
const { JWT_TOKEN } = require("../config")

const router = express.Router() ; 

router.use("/user",UserRouter) ; 






module.exports = router ; 