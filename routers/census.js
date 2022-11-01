

const express = require('express')

const censusControler = require('../controllers/census');

const router = express.Router()



router.post('/get_NIC_Data', censusControler.getNICData);


router.put('/add_to_Census_Myself', censusControler.addToCensusME);



router.put('/add_to_Census_My_family', censusControler.add_to_Census_My_family);











module.exports = router