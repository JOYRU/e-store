const passport = require('passport');
const User = require('../../modules/users/models/User');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
	usernameField:'email'
},
async(email,password,done)=>{
	try{
		const user = await User.findOne({email});
		return done(null,user);
        
	}catch(e){
		done(e);
	}
}
)
); 

passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(async(_id, done) => {
    try{
        const user =  await User.findOne({_id})
        done(null,user)
         
    }catch(e){
        done(e)
    }
   
     
    
  });