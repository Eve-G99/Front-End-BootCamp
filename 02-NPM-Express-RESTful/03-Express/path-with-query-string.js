// localhost:3000/search?q=dog&color=blue

app.get('/search', (req, res) => {
    const { q, color } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched!')
    }
    res.send(`<h1>Search results for: ${q, color}</h1>`)
})