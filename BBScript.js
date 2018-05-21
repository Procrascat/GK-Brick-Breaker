 ////Variables 
 var canvas;
 var canvasContext;
 var BallX = 75;
 var BallY = 75;
 var BallXSpeed = -3;
 var BallYSpeed = -3;
 ////////
 window.onload = function() {
     canvas = document.getElementById('gameCanvas'); ////
     canvasContext = canvas.getContext('2d'); ////

     var Framerate = 60
     setInterval(function() {
         drawEverything();
         moveEverything();
    }, 1000/Framerate);
 }

 function BGcolor() {
     canvasContext.fillStyle = 'black';
     canvasContext.fillRect(0,0, canvas.width, canvas.height);

 }

 function Ball() {
     canvasContext.fillStyle = 'white';
     canvasContext.beginPath();
     canvasContext.arc(BallX, BallY, 20, 0, Math.PI*2, true);
     canvasContext.fill();
 }

 function drawEverything() {
     //// Background 
     BGcolor(); //
     //// Ball Sprite
     Ball();

 }

 function moveEverything() {
     //// Ball movement
     BallX += BallXSpeed;
     BallY += BallYSpeed;

     Bounds(); ////

 }

 function Bounds() {
     //// Boundaries 
     if(BallX >= canvas.width) {
        BallXSpeed *= -1; ///
     }

     if(BallX <= 0) {
        BallXSpeed *= -1; ///
     }

     if(BallY >= canvas.height) {
        BallYSpeed *= -1; ////
     }

     if(BallY <= 0) {
        BallYSpeed *= -1; ////
     }
 }