//https://www.npmjs.com/package/give-me-a-joke

const colors = require('colors');
const jokes = require("give-me-a-joke");
jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
})

