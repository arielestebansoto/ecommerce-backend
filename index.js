const PORT = process.env.PORT || 3000 
const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.setHeader('Content-type','text/html')
    res.send(`
        <h3>Wecolme to the ecommerce backend</h3>
    <span>Visit </span><a href="https://arielestebansoto.com" target="_blank">arielestebansoto.com</a> for more information
    `)
})

app.listen(3000, function() {
    console.log(`server running on port ${PORT}`)
})