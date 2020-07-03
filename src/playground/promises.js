const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
        name:'lucky yang',
        age:24
    });
  }, 1500);
});
console.log("before");
promise
  .then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('this is my other promise');
      }, 1500);
    });
  })
  .then((str) => {
      console.log('does this run',str)
  })//with the 'return', this will only run when the last promise resolves
  .catch((error) => {
    console.log("error", error);
  }); //register call pack
console.log("after");
