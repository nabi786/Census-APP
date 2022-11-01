
const model = require('../model/model')




const addNIC = async(req,res)=>{
    try {

        const nic = req.body.NIC
        
        var matchNIC = await model.personData.findOne({NIC : nic}) 

        if(!matchNIC){

            var person = new model.personData({
                
                Name : req.body.Name,
                NIC  : req.body.NIC,
                Address : req.body.Address,
                IssueDate : req.body.IssueDate,
                ExpireDate : req.body.ExpireDate,
                familyMembers : req.body.familyMembers
            });




            
            await person.save()
            
            res.status(200).json({success : true, msg : "person details added successfully"})


        }else{
            res.status(200).json({success : false, msg : "nic already added"})
        }

        
    } catch (error) {
        console.log(error)
        res.status(500).json({success : false, msg :"something went wrong with server"})
    }
}



module.exports = {addNIC}