const passport = require('passport')
const User = require('../../../modules/users/models/User')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy(
    async(email,password,done)=>{

       const user = await User.findOne({email})
        try{

        
        //     ,function(err,user){
        //     if(err){ return done(err)}
        //     if(!user){
        //         return done(null,false,{message:'Incorrect username.'})
        //     }
        //     if(!user.validPassword(password)){
        //         return done(null,false,{message:'Incorrect password'})

        //     }
           return done(null,user)
        // })
        }catch{
            done(e)
        }
    }
  )
)
