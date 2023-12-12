const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render('index.njk', { title: 'Hello from template' })
})

router.get("/williambirthday", (request, response) => {
    console.log(request)
    response.send('happy birthday')
})

router.get("/tre", (req, res) => {
    res.send('TREvligt')
})




module.exports = router
