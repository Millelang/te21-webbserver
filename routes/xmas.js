const express = require('express')
const router = express.Router()

router.get("/",function (req, res)  {
    res.render('xmas.njk', { title: 'Mulch store' })
})

router.post("/",function (req, res)  {
    console.log(req)
   

    res.render('xmas.njk', { title: 'Mulch store' ,
    name: req.body.name,
    vikt: req.body.vikt,
})
})

module.exports = router