const passport = require('passport')
const User = require('../../../modules/users/models/User')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy(
    async(email,password,done)=>{
     try{
       const user = await User.findOne({email})
       return done(null,user)
        
        }catch(e){
            done(e)
        }
    }
  )
) 
