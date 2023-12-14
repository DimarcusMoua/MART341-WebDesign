var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(200, 360);
ctx.lineTo(300, 500);
ctx.lineTo(100, 500);
ctx.closePath();
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();


ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
