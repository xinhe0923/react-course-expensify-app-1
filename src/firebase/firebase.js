import * as firebase from "firebase";



const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider()

export {firebase, googleAuthProvider, database as default}

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// }); //when the child is removed this will be listened

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_removed',(snapshot)=>{
// console.log(snapshot.key,snapshot.val())
// })//when the child is removed this will be listened

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// const onValueChange = database.ref("expenses").on(
//   "value",
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (e) => {
//     console.log("error with data fetching", e);
//   }
// ); //listen for something

// database.ref('expenses').push(
//     {
//         description:'courese topics',
//         note:'react ',
// amount:13,
// created:3000
//     })

// database.ref('note').push(
//     {
//         title:'courese topics',
//         body:'react native'
//     }
// )

// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(
//       snapshot.val().name,
//       "is working as",
//       snapshot.val().job.title,
//       "in",
//       snapshot.val().job.company
//     );
//   },
//   (e) => {
//     console.log("error with data fetching", e);
//   }
// ); //listen for something

// const onValueChange = database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// },(e)=>{
//     console.log('error with data fetching',e)
// }); //listen for something

// setTimeout(() => {
//   database.ref("age").set(18);
// }, 3000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(2);
// }, 10500);

// database.ref().once('value')
// .then((snapshot)=>{
//     const val=snapshot.val();
//     console.log(val)
// })
// .catch((e)=>{console.log('error fetching data',e)})

// database.ref().set({
//   name: "yang xinhe",
//   age: 24,
//   isSingle: true,
//   stressLevel:6,
//   job:{
//       title:'softwar developer',
//       company:'Google'
//   },
//   location: {
//     city: "Sydney",
//     country: "Australia",
//   },
// }).then(()=>{
//     console.log('data is saved')
// }).catch((error)=>{
// console.log('this failed',error)
// });//set returns promises

// database.ref().update({
// stressLevel:9,

// 'job/company':'Amazon',
// 'location/city':'seattle'

// })

// database.ref("attribute").set({
//     height:73,
//     weight:65
// }).then(()=>{
//     console.log('data is saved')
// }).catch((error)=>{
// console.log('this failed',error)
// });;

// database
//   .ref("expenses/-MBMkZfb0d1PEdcDDiZB")
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((error) => {
//     console.log("Remove failed: " + error.message);
//   });
