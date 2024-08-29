import express from "express"
const app=express()
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import authRouter from "./routes/auth.js"
import userRouter from "./routes/users.js"
import productRouter from "./routes/products.js"
import cartRouter from "./routes/cart.js"
import orderRouter from "./routes/order.js"
import stripeRouter from "./routes/stripe.js"
import cors from "cors";
import Stripe from "stripe";
const KEY=process.env.STRIPE_KEY;
const stripe=Stripe(KEY)

// import router from ".//routes/user.js"
const port=5000

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB connection successful")).catch((err)=>console.log(err))
app.use(express.json())
app.use(cors())
app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
app.use("/api/carts",cartRouter)
app.use("/api/orders",orderRouter)
app.use("/api/checkout",stripeRouter)
app.listen(process.env.PORT || port,()=>{ console.log(`Your server is live on ${port}`)
})





