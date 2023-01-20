const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post Two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title} </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });
      const error = false;
      if (!error) {
        resolve(updatePost())
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}
// createPost({ title: "Post Three", body: "This is post Three" });
// getPost();

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   const error = false;
      if (posts.length > 0) {
        resolve(posts.pop());
      } else {
        reject("Array is empty");
      }
    }, 2000);
  });
}
createPost({ title: "Post Three", body: "This is post Three" })
  // .then(() => {
  //   getPost();
  //   deletePost()
  //     .then(() => {
  //       getPost();
  //       deletePost()
  //         .then(() => {
  //           getPost();
  //           deletePost()
  //             .then(() => {
  //               getPost();
  //               deletePost()
  //                 .then(() => {})
  //                 .catch((err) => {
  //                   console.log(err);
  //                 });
  //             })
  //             .catch((err) => console.log(err));
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  // })
  // .catch((err) => console.log(err));

// Promise.all

// const promise1 = Promise.resolve("Hello World");
// const promse2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promse2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.lastActiveTime = new Date().getTime();
      resolve(posts.lastActiveTime);
    }, 1000);
  });
}

function updatePost() {
  Promise.all([createPost, updateLastUserActivityTime()])
    .then(([value1, value2]) => {
      getPost();
      // console.log(posts, value2);
    })
    .catch((err) => console.log(err));
}
createPost({ title: "Post Four", body: "This is post Four" }).then(()=>{
  getPost();
  deletePost();
})

console.log("Posts",posts)


// -----------------------------------------------------------------------------

// async function init() {
//   await createPost({ title: "Post Three", body: "This is post Three" });
//   getPost();
// }
// init();

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   console.log(data);
// }

// fetchUsers();
// ----****************-----------******************------------*************************

// const fourthPost = createPost({
//   title: "Post Four",
//   body: "This is post Four",
// });
// console.log(fourthPost.then(()=>{
//   getPost();
// }))
// const updateLastUserActivityTime = new Date();

// Promise.all([updateLastUserActivityTime, fourthPost]).then(() => {
//   getPost();
// });
// deletePost();
// getPost();
// console.log(posts);
// getPost();
