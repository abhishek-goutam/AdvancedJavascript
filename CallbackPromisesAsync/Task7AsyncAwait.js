console.log("person1: Show ticket");
console.log("person2: Show ticket");

const preMovie = async () => {
  const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));
  const getButter = new Promise((resolve, reject) => resolve("Butter"));
  let ticket = await promiseWifeBringingTicket;

  console.log(`Wife : I have the ${ticket}`);
  console.log("Husband : Then we should go in ");
  console.log("Wife : No, I am hungry");
  let popcorn = await getPopcorn;
  console.log(`Husband : I got some ${popcorn}`);
  console.log("Husband : Now we should go in ");
  console.log("Wife : I need some butter on my popcorn");

  let butter = await getButter;

  console.log(`Husband : I got some ${butter}`);
  console.log(`Husband : Anything else darling ?`);
  console.log(`Wife : Let's go we are getting late`);
  console.log(`Husband : Thanks for the reminder *grins*`);

  return ticket;
};

preMovie().then((m) => {
  console.log(`Person3: Shows ${m}`);
});

console.log("person4: Show ticket");
console.log("person5: Show ticket");
