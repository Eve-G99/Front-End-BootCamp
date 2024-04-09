const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('Connected Success!')
    })
    .catch(err => {
        console.error('Can not connect to MongoDB', err)
    })

//Schema
const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

//Mongoose Virtuals
//Provide us ability to add properties to schema that don't actually exist in the database
//But we can access them as if they do

//Below could also be achieved through a instance method called getFullName()
//But Virtual will behave like fullName is a property
personSchema.virtual('fullName')
    .get(function () { //getter
        return `${this.first} ${this.last}`
    })
    .set(function (i) { //setter
        this.first = i.substr(0, i.indexOf(' '))
        this.last = i.substr(i.indexOf(' ') + 1)
    })


const Person = mongoose.model('Person', personSchema);

const Tom = new Person({ first: 'Tom', last: 'Butler' })
console.log(Tom.fullName) //Tom Butler

Tom.fullName = 'Tommy Butler' // => setter
console.log(Tom.fullName) //Tommy Butler


//Middleware
//Middleware are functions that run at certain points of the schema lifecycle, also called hooks
//The whole idea is that we can run code before or after certain events
//Use function(next) or return a promise 
personSchema.pre('save', async function () {
    this.first = 'Jane';
    this.last = 'Doe';
    console.log('About to save!')
})
personSchema.post('save', async function () {
    console.log('Just saved!')
})

const Mike = new Person({ first: 'Mike', last: 'Tyson' })
Mike.save() // =>before Mike been saved, will show 'About to save!' and chage name to "Jane Doe", then show 'Just saved!'