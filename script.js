window.onload=function(){
var context;
var randX, randY;
var startPos, endPos;
var width = 500;
var height = 500;
var x = 0;
var y = 0;

getRandom = () => {
  randX = Math.floor(Math.random() * width) + 0;
  randY = Math.floor(Math.random() * height) + 0;
    console.log("Moving to position X:" + randX + ", Y:" + randY);
  startPos = [x, y];
  endPos = [randX, randY];
}

function setupAnimCanvas() {
    var canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        ctx.fillStyle = "red";
        draw();
    }
}
getRandom();
var x = startPos[0], y = startPos[1];
function draw() {
  ctx.clearRect(0, 0, 500, 500);
  ctx.fillRect(x, y, 20, 20);
  if (x < endPos[0]) {
    x += 2;
  }
  if (x > endPos[0]) {
    x -= 2;
  }
  if (y < endPos[1]) {
    y += 2;
  }
  if (y > endPos[1]) {
    y -= 2;
  }
  setTimeout(draw, 25);
}

setInterval('getRandom();', 4000);
setupAnimCanvas();
}
