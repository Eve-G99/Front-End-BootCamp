//On Every Incoming request, we got two parameters that automatically passedin: request and response
//These are Javascript objects made by Express and passed into our callback, 两个参数必须写 即使方程中没用到其中一个
//request is HTTP request information made by Express,是别人给的，我们真正关心的是从request里拿到需要的值，它本质也是json object
//response has many methods in it。 是我们给别人的东西，下面例子是用res.send()给别人内容，res.status()是给别人状态
//区分status和content: 如果要一只猫，status是“成功”，内容是“猫的信息”；如果要一只狗，status是“不成功”，内容是“你要的狗不存在”

const express = require('express');

const app = express();

// //app.use(): Anytime we have an income request, this callback will run
// //Anytime a request hit our server, this callback will run
// app.use((req, res) => {
//     console.log("We got a new request!")
//     res.send('<h1>This is my webpage</h1>')
// })

//Routes
//When use below, we need to commend out app.use() above
//Because anytime we call res.send(), we're done for that one request
//We can't have HTTP request that gets more than one response
app.get('/cats', (req, res) => {
    console.log("You Find the CAT!!!")
    res.send('MEOW!!!')
})
app.post('/cats', (req, res) => {
    res.send('Post request to /cats, This is different from get request')
})


app.get('/dogs', (req, res) => {
    res.send({ name: 'Fido', breed: 'Mixed' })
})

//见path with parameter.js
app.get('/cats/:breed/:color', (req, res) => {
    const { breed, color } = req.params;
    res.send({ 'Breed': breed, 'Color': color })
})

//见query string.js
app.get('/search', (req, res) => {
    const { q, color } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched!')
    }
    res.send(`<h1>Search results for ${q} is ${color}</h1>`)
})

//'/'称之为root route，不打/也能到达
app.get('/', (req, res) => {
    res.send('Welcome to the homepage')
})

// '*' for ALL other routes that we didn't define
// 它的位置很重要！如果放在最前面，那么所有route都会到这里
// 记住一次request只能有一次response，所以route是先到先得的
app.get('*', (req, res) => {
    res.send("This route is not defined!")
})

// Start the server, the server starting to listening
// But how to give the server request? Through http://localhost:3000/
// 想想计算机是一个房子，每个方向的门都能做不同的生意，这里设“3000” is the port，就是其中一个“传送门”，
// 有些门电脑已经自己用了，我们用3000 8080 5000 是我们知道电脑没有在用的门
// 访问3000 就是访问这个计算机的3000号门，正在做的生意就是我们的Express server
// We can have different server on different ports
app.listen(3000, () => {
    console.log("Listening on port")
})
