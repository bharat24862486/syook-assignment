
const mongoose=require(`mongoose`)

const VehicleSchema=mongoose.Schema({
    registrationNumber:{type:String,unique:true,required:true},
    vehicleType:{type:String,enum:["bike","truck"],required:true},
    city:{type:String,required:true},
    image:{type:String},
    activeOrdersCount:{type:Number,default:0}
})

const VehcileModel=mongoose.model("vehicle",VehicleSchema)

module.exports= VehcileModel


