const express=require(`express`)
const VehcileModel = require("../models/vehicle.model")




const VehicleRouter=express.Router()

VehicleRouter.get(`/`,async(req,res)=>{
   try {
    let data=await VehModel.find()
    res.send(data)
   } catch (error) {
    res.send({err:error.message})
   }
})

VehicleRouter.post("/add_vehicle",async(req,res)=>{

   const {registrationNumber} =req.body
   let exist=await VehcileModel.findOne({registrationNumber})

    try {
        if(exist){
       res.send(`vehicle with this registeration number is already exist`)
        }else{
            let newItem=new VehcileModel(req.body)
            await newItem.save()
            res.send("item added successfully")
        }
       
    } catch (error) {
        res.send({err:error.message})
    }
    
})
 




module.exports=VehicleRouter

