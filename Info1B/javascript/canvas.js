type = "text/javascript"

alert("Cliquez sur le logo pour revenir à la page précédente")

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//logo
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(150, 350);
ctx.lineTo(300, 350);
ctx.lineTo(200, 250);
ctx.fillStyle = "orange";
ctx.lineWidth = 5;
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 350);
ctx.lineTo(50, 450);
ctx.lineTo(200, 450)
ctx.lineTo(300, 350)
ctx.fillStyle = "orange";
ctx.lineWidth = 5;
ctx.fill();



ctx.beginPath();
ctx.moveTo(250, 300);
ctx.lineTo(550, 300);
ctx.lineTo(550, 400);
ctx.lineTo(250, 400)
ctx.fillStyle = "orange";
ctx.lineWidth = 5;
ctx.fill();

ctx.beginPath();
ctx.moveTo(550, 300);
ctx.lineTo(450, 200);
ctx.lineTo(550, 170);
ctx.lineTo(650, 300);
ctx.fillStyle = "orange";
ctx.lineWidth = 5;
ctx.fill();

ctx.beginPath();
ctx.moveTo(550, 400);
ctx.lineTo(450, 500);
ctx.lineTo(550, 530);
ctx.lineTo(650, 400);
ctx.fillStyle = "orange";
ctx.lineWidth = 5;
ctx.fill();

ctx.beginPath();
ctx.moveTo(550, 300);
ctx.lineTo(650, 300);
ctx.lineTo(650, 400);
ctx.lineTo(550, 400);
ctx.fillStyle = "orange";
ctx.lineWidth = 5;
ctx.fill();

ctx.beginPath();
ctx.moveTo(650, 300);
ctx.lineTo(750, 300);
ctx.lineTo(750, 400);
ctx.lineTo(650, 400)
ctx.fillStyle = "orange";
ctx.lineWidth = 5;
ctx.fill();

//nez de l'avion
ctx.beginPath();
ctx.lineWidth = "1";
ctx.strokeStyle = "orange";
ctx.moveTo(750, 300);
ctx.bezierCurveTo(750, 300, 1050, 350, 750, 400);
ctx.stroke();
ctx.fill();


//écriture en courbe de bezier
//P
ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.fillStyle = "orange";
ctx.moveTo(650, 50);
ctx.bezierCurveTo(650, 50, 650, 75, 650, 90);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(650, 50);
ctx.bezierCurveTo(650, 50, 690, 58, 650, 70);
ctx.stroke();

//R
ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(675, 50);
ctx.bezierCurveTo(675, 50, 675, 75, 675, 90);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(675, 50);
ctx.bezierCurveTo(675, 50, 715, 58, 675, 70);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(675, 70);
ctx.bezierCurveTo(675, 70, 680, 76, 695, 90);
ctx.stroke();

//O
ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(720, 50);
ctx.bezierCurveTo(720, 50, 690, 70, 720, 90);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(720, 50);
ctx.bezierCurveTo(720, 50, 752, 70, 720, 90);
ctx.stroke();

//J
ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(745, 50);
ctx.bezierCurveTo(745, 50, 775, 50, 775, 50);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(760, 50);
ctx.bezierCurveTo(760, 50, 760, 90, 760, 80);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(760, 80);
ctx.bezierCurveTo(760, 88, 750, 88, 745, 80);
ctx.stroke();
//E
ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(790, 50);
ctx.bezierCurveTo(790, 50, 790, 50, 810, 50);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(790, 50);
ctx.bezierCurveTo(790, 50, 790, 50, 790, 90);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(790, 70);
ctx.bezierCurveTo(790, 70, 790, 70, 810, 70);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(790, 90);
ctx.bezierCurveTo(790, 90, 790, 90, 810, 90);
ctx.stroke();

//T
ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(820, 50);
ctx.bezierCurveTo(820, 50, 820, 50, 840, 50);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.moveTo(830, 50);
ctx.bezierCurveTo(830, 50, 830, 50, 830, 90);
ctx.stroke();