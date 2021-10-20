const express = require('express')
const router = express.Router()
const Purchase = require('../models/purchase')
const Auth = require('../middleware/authentication')

router.get('/all',Auth, async (req,res)=>{
    const purchases = await Purchase.find()
    res.send(purchases)
})

router.get('/user',Auth, async (req,res)=>{
    const purchases = await Purchase.find({user: req.body.user})
    res.send(purchases)
})

router.get('/product',Auth, async (req,res)=>{
    const purchases = await Purchase.find({product: req.body.product})
    res.send(purchases)
})

router.post('/add', Auth, async (req,res)=>{
    const purchase = new Purchase(req.body)
    await purchase.save()
    res.send(purchase)
})


module.exports = router