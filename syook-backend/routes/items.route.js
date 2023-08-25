
const express=require(`express`)
const  ItemModel  = require("../models/items.model")

const ItemRouter=express.Router()

ItemRouter.get(`/`,async(req,res)=>{
    try {
        let getItem=await ItemModel.find()
        res.status(200).send(getItem)
    } catch (error) {
        res.status(404).send({err:error.message})
    }
})

ItemRouter.post("/item_order",async(req,res)=>{
    
    try {
        let newItem=new ItemModel(req.body)
        await newItem.save()
        res.send("item added successfully")
    } catch (error) {
        res.send({err:error.message})
    }
})

ItemRouter.patch("/:id",async(req,res)=>{
  const {id}=req.params

    try {
        let updated=await ItemModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send(`Item Updated Successfully`)

    } catch (error) {
        res.send({err:error.message})
    }
})


module.exports=ItemRouter

