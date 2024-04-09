const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;

// Way 1
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;


// Way 2
const math = {
    add: add,
    PI: PI,
    square: square
}
module.exports = math;

// Way 3
module.exports.add = (x, y) => x + y;

// Way 4: exports can only be assigned to an object or function
exports.add = add;