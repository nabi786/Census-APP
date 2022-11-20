
const model = require('../model/model')





const getNICData = async (req,res)=>{
    try{

        var getNIC = await model.personData.findOne({NIC : req.body.NIC}).populate("familyMembers")
        
        if(getNIC){
            
        

            if(getNIC.ExpireDate ==req.body.ExpireDate){

         

        

                if(getNIC.IssueDate == req.body.IssueDate){


                    res.status(200).json({success : true, personData : getNIC})


                }else{
                res.status(404).json({success : false, msg : "invalid Issue date"})
                }



            }else{
                    res.status(404).json({success : false, msg : "invalid Expire date"})
            }

        }else{
            res.status(404).json({success : false, msg : "invalid NIC"})
        }

    }catch(err){
        res.status(500).json({success : false ,msg:"something went wrong in server"})
    }
}






const addToCensusME = async (req,res)=>{

    try {

      
        var findPeopleByNIC = await model.personData.findOne({NIC : req.body.NIC})

        if(findPeopleByNIC){
           
            if(findPeopleByNIC.Census != "true"){

                await model.personData.findOneAndUpdate({NIC : req.body.NIC}, {Census : true})


                res.status(200).json({success : true, msg : "census successfully"})
            }else{
                
                res.status(404).json({success : false, msg : "already census"})
                
            }
            
        }else{
             
            res.status(404).json({success : false, msg : "invalid NIC"})
        }
        
    


    } catch (error) {

        res.status(500).json({success : false, msg : "something went wrong in server"})
    }   
}   






const add_to_Census_My_family = async (req,res)=>{


        try {


            var idsAry = req.body.idsAry;
            var currentFamilyOwnerNIC = req.body.NIC;
            if(typeof(idsAry) == "object"){
                
                if(idsAry.length > 0){
                    
                    
                    // console.log(idsAry)
                    // cencus to whole family memebers
                    
                    idsAry.forEach(async (item,index)=>{
                        var data = await model.personData.findOneAndUpdate({_id : item},{Census : true}); 
                    });
                     // finding current family owner
                    var familyOwner = await model.personData.findOne({NIC : currentFamilyOwnerNIC});

                    familyOwner.familyMembers = idsAry;

                    await familyOwner.save();
                    res.status(200).json({success: true, msg : "family census added successfully"});
                }else{
                    res.status(404).json({success: false, msg : "kinldy add item in array"});
                }

            }else{
                
                res.status(404).json({success: false, msg : "kinldy send data in array formate"});
            }

                

            
        } catch (error) {
            console.log(error)
            res.status(500).json({success : false ,msg : "something went wrong in server"})
        }   
}











const censusObj = {
    getNICData,addToCensusME,add_to_Census_My_family
}



module.exports = censusObj