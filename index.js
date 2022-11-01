
require('./config/dataBase')

const express = require('express')
const app = express()
const PORT = 3000 
const bodyParser = require('body-parser')

app.use(express.urlencoded({extended : true}))
app.use(express.json())

// routers
const census = require('./routers/census')
const addNyc = require('./routers/addNyc')



app.use('/api',census)
app.use('/api',addNyc)


app.get('*',(req,res)=>{
    res.status(200).json({msg: "census app working successfully"})
})



app.listen(PORT, function(){
    console.log('server started successfully')
})