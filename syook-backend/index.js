const express=require(`express`)
const { connection } = require("./db")
const cors=require(`cors`)
const  ItemRouter  = require("./routes/items.route")
const  CustomerRouter  = require("./routes/customer.route")
const  OrderRouter  = require("./routes/order.route")
const  VehicleRouter  = require("./routes/vehicle.route")


const app=express()

app.use(cors())
app.use(express.json())

app.get(`/`,async(req,res)=>{
    res.send(`hello world`)
})

app.use("/item",ItemRouter)
app.use("/customer",CustomerRouter)
app.use("/order",OrderRouter)
app.use("/vehicle",VehicleRouter)




app.listen(8080,async()=>{
   try {
    await connection
    console.log(`connected to database`)
   } catch (error) {     
    console.log(error)
   }
   console.log(`connected to the port 8080`)
})