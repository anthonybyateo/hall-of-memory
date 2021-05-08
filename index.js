const fs = require('fs');
const db = require('./db');

const newWord = "two".trim();
const newWordForEquals = newWord.toLocaleLowerCase();
if (!db.words.some(word => word.toLowerCase() === newWordForEquals))
    db.words.push(newWord);


fs.writeFile('db.json', JSON.stringify(db), 'utf8', function (err) {
    if (err) throw err;
    console.log('complete');
});

console.log(require('./db'));