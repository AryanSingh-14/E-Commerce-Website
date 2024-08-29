import express from "express";
import dotenv from "dotenv"
dotenv.config()
import Stripe from "stripe";
const router=express.Router()
// // console.log(KEY)
// const stripe=Stripe(KEY)
// router.post("/payment",async (req, res) => {
//   // const {products}=req.body;
//   // const array=Object.values(products)
//   // const lineItems=array.map((product)=>({
//   //   price:{
//   //     currency:"inr",
//   //     product:{
//   //       name:product.name,
//   //       images:[product.image]
//   //     },
//   //     unit_amount:"200",
//   //   },
//   //   quantity:2

//   // }))
//   // const session=await stripe.checkout.sessions.create({
//   //   payment_method_types:["card"],
//   //   line_items:lineItems,
//   //   mode:"payment",
//   //   success_url:"http://localhost:3000/success",
    
//   // })
//   // res.json({id:session.id})
// console.log(req.body)
//    const paymentIntent= await stripe.paymentIntents.create(
//       {
//         //source: req.body.tokenId,
//         amount: req.body.amount,
//         currency: "inr",
//         payment_method_types:["card"]
       
//       },
      
//     );
//     console.log(paymentIntent)
//     res.send({clientSecret:paymentIntent.client_secret})
   
//   });
//   export default router;

// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY

const stripe=Stripe(KEY)
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;