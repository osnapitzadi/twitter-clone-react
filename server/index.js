const morgan = require("morgan")
const express = require("express")
const app = express()
const port = 5000


app.get('/', (req, res) => {
    res.json({
        message :"Hello World"
    });
})

app.post('/tweets', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Express listening at port ${port}`)
})

