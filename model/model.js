
const mongoose = require('mongoose')


const schema = mongoose.Schema({
    Name : {
        type : String,
    },
    NIC  : {
        type : String,
        unique : true
    },
    Address : {
        type : String
    },
    IssueDate : {
        type : String
    },
    ExpireDate : {
        type : String
    },
    
    Census : {
        default : false
        
    },
    familyMembers : [{
        type : mongoose.Schema.Types.ObjectId,
         ref : "personData"
    }],

})





const personData = mongoose.model('personData', schema)

const modelOBj = {
    personData
}

module.exports = modelOBj;