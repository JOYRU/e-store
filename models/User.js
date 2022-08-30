const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
	name:{
		type: String,
		required: [true,'Name is required'],
		maxlength:[64,'Name can\'t be greater than']
	},
	email:{

		type:String,
		required:[true,'Email is required']
	},
	password:{
		type:String,
		required:[true,'password is required']
	},
	isActive:{
		type:Boolean,
		default:true
	},
	isDelete:{
		type:Boolean,
		default:false
	}
},{
	timestamps:true
});

const User = mongoose.model('users',userSchema)
module.exports = User 

