const express = require('express')
const router = express.Router()

router.get("/",function (req, res)  {
    res.render('xmas.njk', { title: 'Jul meny' })
})

router.post("/",function (req, res)  {
    console.log(req)
   

    res.render('xmas.njk', { title: 'Jul meny' ,
    name: req.body.name,
    greeting: req.body.greeting,
})
})

module.exports = router