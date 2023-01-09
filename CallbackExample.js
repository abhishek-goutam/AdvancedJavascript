let attachEventListener = function () {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function () {
    console.log("Button Clicked", ++count);
  });
};

attachEventListener();

let domContentLoaded =function (){
    document.getElementById("btn").addEventListener("click",function (){
        console.log("DOM has loaded");
    })
}

domContentLoaded();
