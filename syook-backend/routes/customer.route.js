const express=require(`express`)
const { CustomerModel } = require("../models/customer.model")

const CustomerRouter=express.Router()

CustomerRouter.get(`/`,async(req,res)=>{
   try {
    let getCustomer=await CustomerModel.find()
    res.status(200).send(getCustomer)
   } catch (error) {
    res.status(400).send({err:error.message})
   }
})

CustomerRouter.post(`/customer_order`,async(req,res)=>{
    try {
        let newCustomer=new CustomerModel(req.body)
        await newCustomer.save()
        res.send("item added successfully")
    } catch (error) {
        res.send({err:error.message})
    }
})

module.exports= CustomerRouter
