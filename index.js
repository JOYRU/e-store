const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser') ; 
const User = require('./modules/users/models/User');
const authRoutes = require('./routes/authRoutes') ;

const passport = require('passport');
require('./utils/authStrategy/localStrategy');

const authMiddleware = require('./middlewares/authMiddleware')

const app = express(); 
require('./utils/db.config');


app.use(bodyParser.urlencoded({extended:false}));


app.set('view engine','ejs');
app.use(session({
	secret: 'f21efe18752a89ff27fc55163f020b4886e763cc',
	resave: false,
	saveUninitialized: true,
	//cookie: { secure: true }
}));

app.use('/',authRoutes);

app.get('/',authMiddleware,(req,res) =>{
	
    console.log('User :' , req.user)
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
app.use(passport.initialize());
app.use(passport.session());



app.listen(5000,function(){
	console.log('app is running') ; 
});