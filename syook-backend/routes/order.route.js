const express=require(`express`)
const { VehModel } = require("../models/vehicle.model")
const { OrderModel } = require("../models/order.model")

const OrderRouter=express.Router()

OrderRouter.get(`/`,async(req,res)=>{
    try {
        let order=await OrderModel.find()
        res.send(order)
    } catch (error) {
        res.send({err:error.message})
    }
})


OrderRouter.post("/",async(req,res)=>{
 const {city,price,itemId,customerId} =req.body
let findoutcity=await VehModel.findOne({city})

if(findoutcity){
if(findoutcity.activeOrdersCount>=10){
    res.send(`sorry our logistic for this city is already fully packed`)
}else{

    try {

        const latestOrder = await OrderModel.findOne({}, 'orderNumber', { sort: { orderNumber: -1 } });
        const latestOrderNumber = latestOrder ? Number(latestOrder.orderNumber) : 0;
        console.log(latestOrder,latestOrderNumber)
        const newOrderNumber = (latestOrderNumber + 1).toString().padStart(4, '0');

        let newOrder = new OrderModel({
            orderNumber: newOrderNumber, 
            city,
            itemId,
            price,
            customerId,
            deliveryVehicleId: findoutcity._id
        });

     await newOrder.save()

     let updateVehicleCount=await VehModel.findByIdAndUpdate({_id:findoutcity._id},{activeOrdersCount:findoutcity.activeOrdersCount+1})

     res.send(`order created successfully`)
    } catch (error) {
        res.send({err:error.message})
    }
}

}else{
    res.send(`sorry we currently not available in this city`)
}

})

  
module.exports={
    OrderRouter
}
