const express = require('express');
const router = express.Router();
const {addUser} = require('../modules/users/service/userService');
const {registerSchema} = require('../modules/users/validations/registerValidation');
const passport = require('passport');


router.get('/register',(req,res) =>{


	return res.render('register',{message:null});
});

router.post('/register',async(req,res) =>{
	const validationResult=  registerSchema.validate(req.body);
	return  res.send(validationResult);
	const user = await(req.body); 
	return res.render('register',{message:'Registration SUccess'});


	return res.render('register',{message:'Registration Successful'});
});

router.get('/login',(req,res) =>{


	return res.render('login',{message:null});
});

router.post('/login',passport.authenticate('local',{
	successRedirect:'/loginn-success',failureRedirect:'/login-fail',
	failureFlash:true
}) ,(req,res,next) =>{
	req.user = 'Guests';
	next();

},
(req,res) =>{
	console.log(req.user);
 
 
	return res.render('login',{message:'Login successful'});
});


module.exports = router ;
