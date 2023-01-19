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
        resolve();
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
  .then(() => {
    getPost();
    deletePost()
      .then(() => {
        getPost();
        deletePost()
          .then(() => {
            getPost();
            deletePost()
              .then(() => {
                getPost();
                deletePost()
                  .then(() => {})
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// deletePost()
//   .then(() => {
//     getPost();
//     console.log("Zero", posts);

//     deletePost()
//       .then(() => {
//         getPost();
//         console.log("Second", posts);
//         deletePost()
//           .then(() => {
//             getPost();
//             console.log("last", posts);
//           })
//           .catch((err) => {
//             console.log("1", err);
//           });
//       })
//       .catch((err) => console.log("2", err));
//   })
//   .catch((err) => console.log("3", err));

// console.log(posts)

// async function init() {
//   await createPost({ title: "Post Three", body: "This is post Three" });
//   getPost();
// }
// init();
// -----------------------------------------------------------------------------

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   console.log(data);
// }

// fetchUsers();
// const promise1 = Promise.resolve("Hello World");
// const promse2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

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
