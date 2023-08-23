
const mongoose=require(`mongoose`)

const ItemSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true}
})

const ItemModel=mongoose.model("item",ItemSchema)

module.exports={
    ItemModel
}