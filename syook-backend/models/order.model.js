
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNumber: { type: String, required: true, unique: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'item', required: true },
    price: { type: Number, required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true },
    deliveryVehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'vehicle', required: true },
    isDelivered: { type: Boolean, default: false }
});


const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = {
    OrderModel
};
