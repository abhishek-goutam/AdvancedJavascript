console.log("person1: Show ticket");
console.log("person2: Show ticket");

const promiseWifeBringingTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("What the hell ",resolve)
    resolve("tickets");
  }, 3000);
});

const getPopcorn = promiseWifeBringingTicket.then((t) => {
  console.log("Husband: We should go in");
  console.log("Wife:No!, I am hungry");
  return new Promise((resolve, reject) => resolve(`${t} ******popcorn`));
});

const getButter =getPopcorn.then((t) => {
    console.log("Husband: We should go in now");
    console.log("Wife:I need butter on my Popcorn");
  
    return new Promise((resolve, reject) => {
        // console.log("resolve",resolve())
        resolve(`${t} ---butter----`)});
  });
getButter.then((res)=>{
console.log(res);
});
// getPopcorn.then((t)=> console.log(t));

console.log("person4: Show ticket");
console.log("person5: Show ticket");


