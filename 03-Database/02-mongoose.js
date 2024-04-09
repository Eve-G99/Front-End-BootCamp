//Initialize
const mongoose = require('mongoose'); //import mongoose

mongoose.connect('mongodb://127.0.0.1:27017/movie-db')
    .then(() => {
        console.log('Connected Success!')
    })
    .catch(err => {
        console.error('Can not connect to MongoDB', err)
    })

//Schema
const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    year: Number,
    rating: Number
})

//Model
const Movie = mongoose.model('Movie', movieSchema)//Mongo will take this, and create a collection called 'movies'

//Instance 1: single
const batMan = new Movie({ title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0 })
//只是跑上面这行无法存入数据库，需要用 batMan.save()

//Instance 2: multiple, 语法和mongo shell几乎一样
Movie.insertMany([ //这个无需.save()
    { title: "La La Land", genre: "Romance", year: 2016, rating: 9.7 },
    { title: "The Avengers", genre: "Action", year: 2012, rating: 8.0 },
    { title: "The Godfather", genre: "Crime", year: 1972, rating: 9.2 },
    { title: "The Lord of the Rings: The Return of the King", genre: "Adventure", year: 2003, rating: 8.9 }
])
.then(data => {
    console.log('Insert Success!', data)
})

//注意：我们的save等操作需要时间获得promise才能知道结果，当进行复杂一系列依靠前一步的Async操作时，我们用promise来处理(用.then(); .catch())
//Promise have Pending, Fulfilled, Rejected 3 states
//顺便记一下这个语法：checkInventory(bookId).then(isEnough => {... 这里的isEnough是checkInventory的Return,不是promise的State
//另一个例子是: Movie.find({id:11925173}).then(movie => console.log(movie)

//如果只是CRUD的简单操作，mongoose提供了更简单的方法:Queries
//Queries也有.then,但和promise完全不同, just return a thenable object
//这部分几乎没分清❗️

//Find
//Model.find()
Movie.find({ year: { $gte: 2010 } }).then(movies => console.log(movies))
Movie.findById('5f3b3b3b3b3b3b3b3b3b3b3b').then(movie => console.log(movie))
Movie.findOne({ title: 'The Dark Knight' }).then(movie => console.log(movie))

//Update
//Model.update()
Movie.updateOne({ title: 'La La Land' }, { rating: 9.9 }).then(res => console.log(res)) //这里return的是Promise
Movie.updateMany({ title: { $in: ['The Avengers', 'The Godfather'] } }, { rating: 10.0 }).then(res => console.log(res))
Movie.findOneAndUpdate({ title: 'The Lord of the Rings: The Return of the King' }, { rating: 7.0 }).then(res => console.log(res))//这里return的还是之前的分数，如果想要new version，见下
Movie.findOneAndUpdate({ title: 'The Lord of the Rings: The Return of the King' }, { rating: 7.8 }, { new: true }).then(res => console.log(res))//这里return的是new version
//上面这行可以用于的场景是，在update某个document的时候，我们也想获得修改后的document

//Delete
//Model.delete()
Movie.deleteOne({ title: 'The Avengers' }).then(res => console.log(res))
Movie.deleteMany({ rating: { $lt: 9.0 } }).then(msg => console.log(msg))
Movie.findOneAndDelete({ title: 'The Godfather' }).then(m => console.log(m))//Return the deleted document