
const mongoose=require(`mongoose`)

const VehSchema=mongoose.Schema({
    registrationNumber:{type:String,unique:true,required:true},
    vehicleType:{type:String,enum:["bike","truck"],required:true},
    city:{type:String,required:true},
    image:{type:String},
    activeOrdersCount:{type:Number,default:0}
})

const VehModel=mongoose.model("vehicle",VehSchema)

module.exports={
VehModel
}

