const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render('index.njk', { title: 'Home' })
})

router.get("/about", (request, response) => {
    response.render('about.njk', { title: 'About' })
    
})

router.get("/tre", (req, res) => {
    res.send('TREvligt')
})




module.exports = router
