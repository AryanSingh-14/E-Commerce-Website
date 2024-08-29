import express from "express";
import User from "../models/User.js";
const router=express.Router();
import CryptoJS from "crypto-js"
import jwt from "jsonwebtoken"
//REGISTER
router.post("/register",async(req,res)=>{
   
    const newUser=new User({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSWORD).toString(),
        
    })
    try{
        const savedUser=await newUser.save()//async await is used to wait for such functions or methods to get executed completely before moving to next line of execution
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})
    //LOGIN
    router.post("/login",async(req,res)=>{
        try{
           const user=await User.findOne({username:req.body.username})
           !user && res.status(401).json("Wrong Credentials!!!!!")//condition 

           const hashedPassword= CryptoJS.AES.decrypt(user.password,process.env.SECRET_PASSWORD)

           const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8)

          
           originalPassword!==req.body.password && res.status(401).json("Wrong Password")

           const accessToken=jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin,
           },
           process.env.JWT_SEC,
           {expiresIn:"3d"}
        )

           const {password,...others}=user._doc;
           res.status(200).json({...others,accessToken})
        }catch(err){
            console.log(err)
            // res.status(500).json(err) 
        }
        //    if(user===false)
        //    {
        //     res.status(401).json("Wrong Credentials")
        //    }else{  
        //     const hashedPassword= CryptoJS.AES.decrypt(user.password,process.env.SECRET_PASSWORD)
        //     }
        //     const password=hashedPassword.toString(CryptoJS.enc.Utf8);
        //     if(password!=req.body.password)
        //     {
        //         res.status(401).json("Wrong Credentials")
        //     }else res.status(200).json(user)
        
    })


export default router;