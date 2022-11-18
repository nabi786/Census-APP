const mongoose = require('mongoose')


var DB = process.env.DataBase;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('mongoose connect successfully')
}).catch((err)=>{
    console.log(err)
    console.log('mongoose not connected')
})

