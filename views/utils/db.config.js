const mongoose = require('mongoose')
const CONNECTION_URL = 'mongodb+srv://joycseru:f01765711177@x-store.syqjyel.mongodb.net/?retryWrites=true&w=majority' ; 
const PORT = process.env.PORT || 5000 ; 
mongoose.connect('mongodb+srv://joycseru:f01765711177@x-store.syqjyel.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true ,useUnifiedTopology:true })
mongoose.connection.once('open',()=>{
    console.log('connected to MongoDB')
})
