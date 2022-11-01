const express = require('express')
const router = express.Router()




const {addNIC} = require('../controllers/addNIC')

router.post('/addNyc' , addNIC)



module.exports = router