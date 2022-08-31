const Joi = require('joi');

const registerSchema = Joi.object({
	name: Joi.string()
		.min(3)
		.max(30)
		.required(),

	password: Joi.string(),
		

	repeat_password: Joi.ref('password'),

	email: Joi.string()
		.trim()
		.lowercase()
		.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
	
	
	.with('password', 'repeat_password');

module.exports = {registerSchema};