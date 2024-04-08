// 一般来说，给每个entity单独建一个file, 里面都会有一个index.js.
// Purpose of this index for a given resource is to render multiple of that resource
// 我们写的function能连上service 程序能给别人用，就是API

const express = require('express');
const app = express();
const { v4: uuid } = require('uuid')
const methodOverride = require('method-override')

// Middleware to parse JSON and urlencoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

let comments = [
    {
        id: uuid(),
        username: 'Tammy',
        comment: 'lol that is so funny!',
    }, {
        id: uuid(),
        username: 'Mike',
        comment: 'I like to go birdwatching with my dog',
    }
]

app.get('/comments', (req, res) => {  //Index
    res.send('All', res.json(comments))
    // res.render('comments/index', { comments }) // Worked to link to comments/index.ejs
})

app.get('/comments/new', (req, res) => {  //New
    res.send("Page to add NEW COMMENT")
})

app.post('/comments', (req, res) => {  //Create
    const { username, comment } = req.body;
    comments.push({ id: uuid(), username, comment })
    res.send('Created List', res.json(comments))
    //res.redirect('/comments') //这里其实浏览器make a new request, 把我们填进去的"/comments"放入header，提交后才导致跳转到comments页面。所以其实是两个requests.但这个指令在Postman里不work。
})

app.get('/comments/:id', (req, res) => {  //Show
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.send('This Comment', res.json(comment))
})

//Method Override
//Let people use HTTP verbs such as PUT or DELETE in places where the client doesn't supoort it
//In here, front-end is HTML form which only support GET and POST, we could use methodOverride to achive PUT or DELETE
//Looks like: 
// < form method = "POST" action = "/comments/<%= comment.id %>?/_method="DELETE"> 
//     < button > DELETE</ > 
// </form >
app.get('/comments/:id/edit', (req, res) => {  //Edit
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment }) //Pass it to fron-end edit.ejs
})

app.patch('/comments/:id', (req, res) => {  //Update
    // res.send("UPLOAD WORK!")
    const { id } = req.params
    const newCommentContent = req.body.comment
    const prevComment = comments.find(c => c.id === id)
    prevComment.comment = newCommentContent
    res.send('`Now Comment:', res.json(prevComment))
    //res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {  //Destroy
    //Reverse: find all comments except the one be deleted, reassign them to comments
    const { id } = req.params
    comments = comments.filter(c => c.id !== id);
    //res.redirect('/comments')
})

app.listen(8080, () => {
    console.log("Server is on PORT 8080")
})