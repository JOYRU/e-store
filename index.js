const express = require('express');
const bodyParser = require('body-parser') ; 
// const User = require('./modules/users/models/User');
const authRoutes = require('./routes/authRoutes') ; 
const app = express(); 
require('./views/utils/db.config');


app.use(bodyParser.urlencoded({extended:false}));


app.set('view engine','ejs');

app.use('/',authRoutes)

app.get('/',function(req,res){
	return res.render('index');
});

// app.get('/register',function(req,res){
// 	return res.render('register');
// });

// app.post('/register',async(req,res) =>{
// 	const user = new User(req.body); 
// 	await user.save();
// 	return res.render('register',{message:'Registration Successful'});

// });


app.listen(5000,function(){
	console.log('app is running') ; 
});