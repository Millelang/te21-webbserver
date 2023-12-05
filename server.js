const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const port = process.env.PORT || 3000

app.use(express.static('public'))

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.get("/", (req, res) => {
    res.render('index.njk', { title: 'Hello from template' })
})

app.get("/williambirthday", (request, response) => {
    console.log(request)
    response.send('happy birthday')
})

app.get("/tre", (req, res) => {
    res.send('TREvligt')
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})