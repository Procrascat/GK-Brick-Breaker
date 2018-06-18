 ////Variables 
 var BallX = 400; ///
 var BallY = 300; ///
 var canvas; ///
 var canvasContext; ///
 
 var BallXSpeed = 3; ///
 var BallYSpeed = 3; ///
 var PXpos = 400; ///
 var PYpos = 500; ///
 var Pwidth = 75; ///
 var Pheight = 10; ///

 ////////
 window.onload = function() {
     canvas = document.getElementById('gameCanvas'); ////
     canvasContext = canvas.getContext('2d'); ////
     
     canvas.addEventListener('mousemove', function(evt) {
        var mousePos = CalculateMousePos(evt); ////
        PXpos = mousePos.x - (Pwidth/2); /// center of paddle
    } );
   

     var Framerate = 60;
     setInterval(function() {
         drawEverything();
         moveEverything();
    }, 1000/Framerate);
 }
 
 function CalculateMousePos(evt) {
     var rect = canvas.getBoundingClientRect(), root = document.documentElement;

     // account for margins, canvas position on page, scroll amount, etc.
     var mouseX = evt.clientX - rect.left - root.scrollLeft;
     var mouseY = evt.clientY - rect.top - root.scrollTop;
     
     return {
         x: mouseX,
         y: mouseY
     };
 } 

 function colorRect(Xpos, Ypos, BLength, BWidth, BColor) {
     canvasContext.beginPath();
     canvasContext.fillStyle = BColor;
     canvasContext.fillRect(Xpos, Ypos, BLength, BWidth); ///
     
     canvasContext.fill();
 }



 function Ball(CXpos, CYpos, Clength, CColor) {
    canvasContext.beginPath();
    canvasContext.fillStyle = CColor;
     canvasContext.arc(CXpos, CYpos, Clength, 0, Math.PI*2, true); //
    
     canvasContext.fill(); 
 }

 function drawEverything() {
    //// Background 
        colorRect(0, 0, canvas.width, canvas.height,'black'); //
    ///// Paddle
        colorRect(PXpos, PYpos, Pwidth, Pheight, 'white'); //
    //// Ball Sprite
        Ball(BallX, BallY, 10, 'white');     //     
 }

 function moveEverything() {
     //// Ball movement
     BallX += BallXSpeed;
     BallY += BallYSpeed;

     Bounds(); ////

     BallCollision();

     

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
        BallReset(); ////
     }

     if(BallY <= 0) {
        BallYSpeed *= -1; ////
     }
 }

 function BallReset() { 
     BallX = canvas.width/2;
     BallY = canvas.height/2;
 }

 function BallCollision() {
     if(BallY >= PYpos - 10  && BallX >= PXpos  && BallX <= PXpos + Pwidth && BallY <= PYpos +10) {
        BallYSpeed *= -1;

     }
 } 