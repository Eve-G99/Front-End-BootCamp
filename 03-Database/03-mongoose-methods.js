const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('Connected Success!')
    })
    .catch(err => {
        console.error('Can not connect to MongoDB', err)
    })

//Schema
const productSchema = new mongoose.Schema({
    name: {//object type
        type: String,
        required: true,
        maxlength: 15
    },
    price: {
        type: Number, //注意：我们并不需要真的传入Number,只需要传入的值能够turned into number,比如“399”
        required: true,
        min: [0, 'Price must be positive!']//Error Message
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']//Enum: Value must be one of value in the array. Validation.
    }
})

//Model
const Product = mongoose.model('Product', productSchema)

//Instance
const bike = new Product({ name: 'Mountain Bike', price: 399, onSale: true })
bike.save()
    .then(data => {
        console.log('Insert Success!', data)
    })
    .catch(err => {
        console.log('Insert Failed!', err)
    })

const test = new Product({ name: 'Test', price: 399, color: 'red' }).save()//虽然不会报错，但由于color不在schema里，并不会存入数据库
const helmet = new Product({ name: 'Helmet', price: "19.99", onSale: true, categories: ['Sports', "Ski", 123] }).save()


//Update
//用Mongoose进行udate时，Mongoose不会自动使用我们在Schema里写好的Validation，We need to tell if we still want to use it
Product.findOneAndUpdate({ name: 'Helmet' }, { price: 100 }, { new: true, runValidators: true })
    .then(data => {
        console.log('Insert Success!', data)
    })
    .catch(err => {
        console.log('Insert Failed!', err)
    })


//TODO: Instance Method
//Help us to add our own custom methods to our schema
//productSchema.methods.name实际应放在Schema定义后，Model定义前

//Example-1
productSchema.methods.greet = function () {
    console.log('Hello!');
    console.log(`- from ${this.name}`);//"this" is individual instance
}

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Helmet' });
    foundProduct.greet();
}

findProduct();

//Example-2
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();//每次我们call save，都会花一些时间，它本质是个async operation, 所以这里用了return
}

const toggleProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Helmet' });
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
}

toggleProduct();

//Example-3
productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

const addProductCategory = async () => {
    const foundProduct = await Product.findOne({ name: 'Helmet' });
    await foundProduct.addCategory('Cycling');
    console.log(foundProduct);
}

addProductCategory();

//TODO: Static Method
//is the method on the model it self, not act upon the individual instance
//productSchema.static.name
//Normally doing sth like fancy find, update, delete, so usually built on top of existing model methods
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

Product.fireSale().then(res => console.log(res))