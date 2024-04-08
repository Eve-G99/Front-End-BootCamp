//":"means a variable
application.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

//注意：下面有两个variable,所以在用户输入/r/A/B时指的是两个parameter 会直接到下面的route，而不会涵盖到/r/A的route
application.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID:${postId} on the ${subreddit} subreddit</h1>`)
})