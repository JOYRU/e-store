const User = require('../models/User');


const addUser = async(userInput) =>{
	try{
		const user = new User(req.body);
		await user.save(); 
		return user;

	} catch(e){
		console.log(e); 
	}
};

module.exports = {addUser}; 