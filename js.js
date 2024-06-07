const btn = document.querySelector(".btn");
const body = document.querySelector("body");
let bcColor = true;
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "#2fbeb4";
  if (bcColor === true) {
    body.style.backgroundImage =
      "linear-gradient(40deg, #24404c 50%, #2fbeb4 50%)";
    // console.log("rinak");
    bcColor = false;
  } else {
    body.style.backgroundImage =
      "linear-gradient(40deg, #2fbeb4 50%, #24404c 50%)";
    // console.log("ronak");
    bcColor = true;
  }
});
