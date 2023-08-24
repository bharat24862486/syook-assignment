const express = require(`express`)
const VehicleRouter = require("../models/vehicle.model")
const OrderModel = require("../models/order.model")

const OrderRouter = express.Router()

OrderRouter.get(`/`, async (req, res) => {
    try {
        let order = await OrderModel.find()
        res.send(order)
    } catch (error) {
        res.send({ err: error.message })
    }
})


OrderRouter.post("/order_post", async (req, res) => {
    const { city, price, itemId, customerId } = req.body
    let citySingle = await VehicleRouter.findOne({ city })

    if (citySingle) {
        if (citySingle.activeOrdersCount >= 10) {
            res.send(`Sorry our service is currently unavailable in your city..`)
        } else {

            try {

                const lastOrder = await OrderModel.findOne({}, 'orderNumber', { sort: { orderNumber: -1 } });
                const lastOrderNumber = lastOrder ? Number(lastOrder.orderNumber) : 0;

                const newOrderNumber = (lastOrderNumber + 1).toString().padStart(4, '0');

                let newOrder = new OrderModel({ orderNumber: newOrderNumber, city, itemId, price, customerId, deliveryVehicleId: city._id });

                await newOrder.save()

                let countUpdate = await VehModel.findByIdAndUpdate({ _id: citySingle._id }, { activeOrdersCount: citySingle.activeOrdersCount + 1 })

                res.send(`order created successfully`)
            } catch (error) {
                res.send({ err: error.message })
            }
        }

    } else {
        res.send(`sorry we currently not available in your city`)
    }

})


module.exports =OrderRouter

