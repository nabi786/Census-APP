
const model = require('../model/model')




const addNIC = async(req,res)=>{
    try {

        const nic = req.body.NIC
        
        var matchNIC = await model.personData.findOne({NIC : nic});
        var guradianNic = await model.personData.findOne({NIC : req.body.Guardian_NIC});
        var guardianID = "";
        if(guradianNic != null){
            guardianID = guradianNic._id; 
        }
        
        
        if(!matchNIC){
            
            var person = new model.personData({
                Name : req.body.Name,
                NIC  : req.body.NIC,
                Address : req.body.Address,
                IssueDate : req.body.IssueDate,
                ExpireDate : req.body.ExpireDate,
                Guardian_NIC : guardianID,
                Guardian_Relation : req.body.Guardian_Relation
            });
            
            
            
            
            
            await person.save()
            if(guradianNic != null){
                guradianNic.familyMembers.push(person._id)
                await guradianNic.save();
            }
            
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