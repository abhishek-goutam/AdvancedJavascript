let attachEventListener = function () {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function () {
    console.log("Button Clicked", ++count);
  });
};

attachEventListener();