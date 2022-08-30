const express = require('express');
const bodyParser = require('body-parser') ; 
const User = require('./models/User')
require('./views/utils/db.config')
const app = express(); 

app.use(bodyParser.urlencoded({extended:false}))


app.set('view engine','ejs')

app.get('/',function(req,res){
	return res.render('index')
});

app.get('/register',function(req,res){
	return res.render('register')
});

app.post('/register',async(req,res) =>{
	const user = new User(req.body) 
	await user.save()
	return res.send(user)

});


app.listen(5000,function(){
	console.log('app is running') ; 
});