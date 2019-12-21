const express = require('express');
const app = express();

const flat = [
    { zimmer: 3, price: 2000 },
    { zimmer: 2, price: 1500 },
    {zimmer: 2, price: 3000}
]

app.get('/', (req, res) => {
    console.log("main route")
    res.send('Hello World!');
});

app.get('/flat', (req, res, next) => {
    console.log("sending")
    res.send(flat)
})
//local:3000/flat/1234
app.get('/flat/:id', (req, res, next) => {
    console.log("flat rout")
    let id = req.params.id
    res.send({ id })
})

// /flat?term=Kreuzberg
app.get('/flat', (req,res,next)=>{
    let item = req.params.item
    if(req.query.term) {

    }
    res.send({item})
})

app.post('/flat', (req, res, next) => {
    console.log("post route")
    const zimmer = req.body.zimmer
    const price = req.body.price
    res.send({ zimmer, price })

})

app.patch('/flat/:id', (req, res, next) => {
    console.log("path route")
    let id = req.params.id
    let updatedFlat = req.body
    res.send({ id, updatedFlat })
})

app.delete("/flat/:id", (req, res, next) => {
    console.log("delete route")
    let id = req.params.id
    res.send({ id: "deleted flat" })
})

let port = 3000
app.listen(port, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.