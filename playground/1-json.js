const fs = require('fs');
// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.author)

const dataBuffer = fs.readFileSync('1-json.json') // buffer
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON); // object

user.name = 'Aakash Kharwar'
user.age = 55

const userJSON = JSON.stringify(user);

fs.writeFileSync('1-json.json', userJSON)


// const bio = {
// 	name: 'Naveen',
// 	age: '25'
// }

// const bioJSON = JSON.stringify(bio);


// console.log(data);