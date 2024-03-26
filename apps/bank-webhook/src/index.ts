import express from "express";
import db from "@repo/db";

const app = express();


app.post('/hdfcWebHook', async (req,res)=>{
    const paymentInformation = {
        token : req.body.token,
        userId : req.body.user_identifier,
        amount : req.body.amount
    }
    //update balance in db and add transaction
    await db.balance.update({
        where : {
            token : paymentInformation.token
        },
        data : {
            amount : paymentInformation.amount
        }
    })
})