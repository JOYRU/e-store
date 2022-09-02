const authMiddleware = (res,req,next)=>{
    console.log(req.isAuthenticated())
    next() 
}

module.exports = authMiddleware 