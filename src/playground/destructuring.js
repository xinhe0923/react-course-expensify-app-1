// const person = {
//   name: "yang",
//   age: "25",
//   location: {
//     city: "sydney",
//     temp: 22,
//   },
// };
// const { name='jhon', age } = person;

// // const name=person.name;
// // const age=person.age;
// const {city, temp:temprature}=person.location;
// if (city && temprature){
//     console.log(`it is ${temprature} in ${city}`)
// }

// console.log(`${name} is ${age}`);
// const book={
//     title:'ego is the enemy',
//     author:'ryan holiday',
//     publisher:{
//         name:'penguine',

//     }
// }
// const {name:publisherName='undefiend'}=book.publisher
// console.log(publisherName)

const address=['1229 rainbow st', 'sydney','NSW','2007'];
const [street,city,state,zip]=address
// const [street,city,state,zip]=address;
console.log(`you are in ${street} ,${city}`)
const item=['coffee','$2','$2.5','$2.75'];
const[itemname,,medium,large]=item
console.log(`${medium}`)

