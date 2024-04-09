const express = require('express');
const app = express();

const path = require('path'); //absolute path

//Get和Post无需在路径中表明
//区分request和response, request是User要，response是Server给


//app.use: run code for every single request
//里面这串代码是express提供的“Build In Middleware Function”，会自动把request.body parse to "urlencoded"(前面这串)
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

app.get('/tacos', (req, res) => {
    res.send("GET /cat Response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`You order ${qty} ${meat} tacos!`)
})

app.listen(3000, () => {
    console.log("Server is on PORT 3000")
})


// Main Idea of RESTful is using specific standard way to architecture the server
// 比如这些就是不好的route: GET /allcomments, GET /showAllComments, Post /newComment,
// 按照REST标准，假设我们要做 comment 的CRUD，"/comments" will be base for everything we do
// Below are the basic CRUD functionalty
// GET /comments  - List all
// POST /comments  - Create new one
// GET /comments/:id  - Get one comment
// PATCH /comments/:id  - Update one comment
// DELETE/comments/:id  - Delete one comment
