//
// Object destructuring
//


// const person = {
//     name: 'Reginald',
//     age: 27,
//     location:{
//         city: 'Columbus',
//         temp: 43
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temprature} = person.location

// if(city && temprature){
//     console.log(`It's ${temprature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher : {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;


// console.log(publisherName); // Penguin, Self-Published



//
// Array destructuring
//

const address = ['3409 Cherokee Ave', 'Columbus', 'Georgia', '31906'];
const [, city, state = 'New Belgum'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)

