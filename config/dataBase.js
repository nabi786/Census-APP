const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CensusApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('mongoose connect successfully')
}).catch((err)=>{
    console.log(err)
    console.log('mongoose not connected')
})

