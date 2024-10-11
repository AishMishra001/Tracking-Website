const express = require("express") ; 
const jwt = require("jsonwebtoken") ; 
const UserRouter = require("./user");


const router = express.Router() ; 

router.use("/user",UserRouter) ; 

module.exports = router ; 