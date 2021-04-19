
var canvas = document.getElementById("olympicanvas");

var ctx = canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 20;
ctx.arc(225, 210, 125, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 20;
ctx.arc(500, 210, 125, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 20;
ctx.arc(775, 210, 125, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 20;
ctx.arc(350, 400, 125, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 20;
ctx.arc(650, 400, 125, 0, 2 * Math.PI);
ctx.stroke();