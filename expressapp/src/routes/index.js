const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service')
const Product = require('../models/product');
const User = require('../models/user')
const Auth = require('../middleware/authentication')
const upload = require('../helpers/storage')
//----****ROUTES*****
router.get('/', Auth, async (req,res)=>{
    const products = await Product.find();
    res.send(products);
});


router.post('/', upload.single('image'), async (req,res)=>{
    //res.send(req.body);
    const product = new Product(req.body);
    const { filename } = req.file
    product.setImg(filename)
    await product.save();
    res.send(product);
});

router.post('/edit',async (req,res)=>{
    let product = await Product.findById(req.body.product)
    product.value = req.body.value
    await product.save()
    res.status(200).json({product:product})
})


//*******Auth Routes
router.post('/login', async (req,res)=>{
    try {
        const {email, password} = req.body
        if (!email || !password) {
            res.status(400).json('User and password required')
        }
        let token = await authService.login(req.body)
        // res.send(user)
        if (token) {
            res.status(token.code).json(token)
        }else{
            res.status(401).json({msg:'Incorrect data'})
        }
    } catch (error) {
        res.send(error)
    }
})

router.post('/register', async (req,res)=>{
    try {
        const user = new User(req.body)
        const userSaved = await authService.register(user)
        res.send(userSaved)
    } catch (error) {
        res.send(error)
    }
})


//exportar los modulos
module.exports = router;