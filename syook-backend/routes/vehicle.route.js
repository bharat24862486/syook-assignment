const express=require(`express`)
const { VehModel } = require("../models/vehicle.model")




const VehicleRouter=express.Router()

VehicleRouter.get(`/`,async(req,res)=>{
   try {
    let data=await VehModel.find()
    res.send(data)
   } catch (error) {
    res.send({err:error.message})
   }
})

VehicleRouter.post("/",async(req,res)=>{

   const {registrationNumber} =req.body
   let exist=await VehModel.findOne({registrationNumber})

    try {
        if(exist){
       res.send(`vehicle with this registeration already exist`)
        }else{
            let newItem=new VehModel(req.body)
            await newItem.save()
            res.send("item added successfully")
        }
       
    } catch (error) {
        res.send({err:error.message})
    }
    
})
 




module.exports={
    VehicleRouter
}
