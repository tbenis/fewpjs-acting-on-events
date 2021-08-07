// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";

document.addEventListener("keydown", function (e) {
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
    
  var leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }