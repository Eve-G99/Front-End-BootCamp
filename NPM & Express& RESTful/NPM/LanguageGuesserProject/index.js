const franc = require('franc');
const langs = require('langs');
const input = process.argv[2];
const LangCode = franc(input)
const colors = require('colors');

if (LangCode === 'und') {
    console.log("Sorry, Couldn't figure out the language. Please try with more sample text.");
} else {
    const Language = langs.where("3", LangCode)
    console.log(`Our Guess is: ${Language.name}!`.rainbow);
};

