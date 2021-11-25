function draw(){
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');

    contexto.beginPath();
    contexto.moveTo(50,50);
    contexto.lineTo(50, 150);
    contexto.lineTo(150, 150);
    contexto.lineTo(150, 50);
    contexto.fillStyle = "rgb(255 76 76 / 85%)";
    contexto.fill();
    

    contexto.beginPath();
    contexto.moveTo(90,90);
    contexto.lineTo(90, 190);
    contexto.lineTo(190, 190);
    contexto.lineTo(190, 90);
    contexto.fillStyle = "rgb(80 76 255 / 85%)";
    contexto.fill();

    contexto.beginPath();
    contexto.font = "100px Merriweather";
    contexto.fillText("Canvas", 220, 160);

    var canvas = document.getElementById('arbol');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(300,100);
    context.lineTo(250, 160);
    context.lineTo(350, 160);
    context.lineTo(300,100);
    context.fillStyle = "#008000";
    context.fill();

    context.beginPath();
    context.moveTo(300,130);
    context.lineTo(230, 200);
    context.lineTo(370, 200);
    context.lineTo(300,130);
    context.fillStyle = "#008000";
    context.fill();

    context.beginPath();
    context.moveTo(300,170);
    context.lineTo(215, 240);
    context.lineTo(385, 240);
    context.lineTo(300,170);
    context.fillStyle = "#008000";
    context.fill();

    context.beginPath();
    context.moveTo(300,210);
    context.lineTo(200, 275);
    context.lineTo(400, 275);
    context.lineTo(300,210);
    context.fillStyle = "#008000";
    context.fill();

    context.beginPath();
    context.moveTo(250,275);
    context.lineTo(250, 295);
    context.lineTo(350, 295);
    context.lineTo(350,250);
    context.fillStyle = "#008000";
    context.fill();

    context.beginPath();
    context.moveTo(280,295);
    context.lineTo(280, 345);
    context.lineTo(320, 345);
    context.lineTo(320,295);
    context.fillStyle = "#a52a2a";
    context.fill();

    context.beginPath();
    context.moveTo(300,80);
    context.lineTo(290, 100);
    context.lineTo(270, 105);
    context.lineTo(290, 110);
    context.lineTo(290, 110);
    context.lineTo(280, 130);
    context.lineTo(300, 117);
    context.lineTo(320, 130);
    context.lineTo(310, 110 );
    context.lineTo(330, 105);
    context.lineTo(310, 100);
    context.lineTo(300, 80);
    context.fillStyle = "#ffd600";
    context.fill();

    var canvas = document.getElementById('mu');
    var contex = canvas.getContext('2d');

    contex.beginPath();
    contex.arc(300, 75, 40, 0, 2 * Math.PI);
    contex.fillStyle = "lightgrey";
    contex.fill();

    contex.beginPath();
    contex.arc(280, 65, 4, 0, 2 * Math.PI);
    contex.fillStyle = "black";
    contex.fill();

    contex.beginPath();
    contex.arc(320, 65, 4, 0, 2 * Math.PI);
    contex.fillStyle = "black";
    contex.fill();

    contex.beginPath();
    contex.moveTo(300,75);
    contex.lineTo(345, 78);
    contex.lineTo(300, 87);
    contex.lineTo(300,130);
    contex.fillStyle = "#fea500";
    contex.fill();

    contex.beginPath();
    contex.arc(295, 85, 15, 20, -1 * Math.PI);
    contex.strokeStyle = "red";
    contex.stroke();

    contex.beginPath();
    contex.arc(300, 160, 55, 0, 2 * Math.PI);
    contex.fillStyle = "lightgrey";
    contex.fill();

    contex.beginPath();
    contex.arc(300, 270, 70, 0, 2 * Math.PI);
    contex.fillStyle = "lightgrey";
    contex.fill();

    contex.beginPath();
    contex.arc(300, 145, 5, 0, 2 * Math.PI);
    contex.fillStyle = "black";
    contex.fill();

    contex.beginPath();
    contex.arc(300, 185, 5, 0, 2 * Math.PI);
    contex.fillStyle = "black";
    contex.fill();

    contex.beginPath();
    contex.arc(300, 225, 5, 0, 2 * Math.PI);
    contex.fillStyle = "black";
    contex.fill();

    contex.beginPath();
    contex.moveTo(270,155);
    contex.lineTo(185, 125);
    contex.strokeStyle = "red";
    contex.stroke();

    contex.beginPath();
    contex.moveTo(200,131);
    contex.lineTo(180, 140);
    contex.moveTo(200,131);
    contex.lineTo(200, 110);

    contex.strokeStyle = "red";
    contex.stroke();

    contex.beginPath();
    contex.moveTo(330,155);
    contex.lineTo(390, 125);
    contex.strokeStyle = "red";
    contex.stroke();

    contex.beginPath();
    contex.moveTo(370,135);
    contex.lineTo(380, 110);
    contex.moveTo(370,135);
    contex.lineTo(395, 140);

    contex.strokeStyle = "red";
    contex.stroke();

    contex.beginPath();
    contex.rect(50, 340, 500, 30);
    contex.fillStyle = "lightgrey";
    contex.fill();

}