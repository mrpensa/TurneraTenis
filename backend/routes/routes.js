const express = require('express')
const router = express.Router()

const cancha =require('../models/Canchas')

router.get('/',async (req,res)=>{
    const canchas = await cancha.find()
    res.json(canchas)
})

module.exports = router