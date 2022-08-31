const express = require('express')
const router = express.Router()
const {addUser} = require('../modules/users/service/userService')
const {registerSchema} = require('../modules/users/validations/registerValidation')

router.get('/register',(req,res) =>{


    return res.render('register',{message:null})
})

router.post('/register',async(req,res) =>{
   const validationResult=  registerSchema.validate(req.body)
   return  res.send(validationResult)
    const user = await(req.body) 
    return res.render('register',{message:'Registration SUccess'})


    return res.render('register',{message:'Registration Successful'})
})

module.exports = router ;
