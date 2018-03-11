var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var randX, randY;
var nextX, nextY;
var startTime, duration;

canvas.width = 500;
canvas.height = 500;

getRandom = () => {
  randX = Math.floor(Math.random() * canvas.width) + 0;
  randY = Math.floor(Math.random() * canvas.height) + 0;
}
getRandom();

var x = randX;
var y = randY;

class Target {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.draw(randX, randY);
  }

  draw(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(this.x, this.y, 15, 15);
    ctx.fill();
  }

  move(x, y) {
    if (nextX < x) {
      nextX += 1;
      console.log("increment");
      anim();
    }
  }
}

var target = new Target(0, 0);
getRandom();
console.log("New randoms:" + randX, randY);
console.log(target.constructor.x, target.constructor.y);
target.move(randX, randY);


function anim(time) {
  if (!startTime) // it's the first frame
    startTime = time || performance.now();
    x = target.x;
    y = target.y;
    console.log(x, y);
  // deltaTime should be in the range [0 ~ 1]
  var deltaTime = (time - startTime) / duration;
  // currentPos = previous position + (difference * deltaTime)
  var currentX = x + ((nextX - x) * deltaTime);
  var currentY = y + ((nextY - y) * deltaTime);

  if (deltaTime >= 1) { // this means we ended our animation
    x = nextX; // reset x variable
    y = nextY; // reset y variable
    startTime = null; // reset startTime
    target.draw(x, y); // draw the last frame, at required position
    console.log("// draw the last frame, at required position");
  } else {
    target.draw(currentX, currentY);
    console.log(currentX);
    requestAnimationFrame(anim); // do it again
  }
}
