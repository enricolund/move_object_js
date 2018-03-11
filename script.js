var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.fillStyle = "red";
ctx.rect(10, 10, 15, 15);
ctx.fill();

var starttime

function moveit(timestamp, el, dist, duration){
    //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
    var timestamp = timestamp || new Date().getTime()
    var runtime = timestamp - starttime
    var progress = runtime / duration
    progress = Math.min(progress, 1)
    console.log((dist * progress).toFixed(2));
    if (runtime < duration){ // if duration not met yet
        requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
            moveit(timestamp, el, dist, duration)
        })
    }
}

requestAnimationFrame(function(timestamp){
    starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
    moveit(timestamp, ctx, 400, 2000) // 400px over 1 second
})
