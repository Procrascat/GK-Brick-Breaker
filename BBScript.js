////Variables 
var BallX = 400; ///
var BallY = 300; ///
var canvas; ///
var canvasContext; ///
var brickGrid = Array.length = B_Column * B_Row;
var BallXSpeed = 3; ///
var BallYSpeed = 3; ///
var PXpos = 400; ///
var PYpos = 540; ///
const Pwidth = 75; ///
const Pheight = 10; ///
var PCenter = PXpos + (Pwidth/2); ///
const B_Width = 80;
const B_Height = 20;
const B_Gap = 2;
var B_Column = 10;
var B_Row = 14;

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

function Brick() {
    for(var BrickCCord = 0; BrickCCord <= B_Column; BrickCCord++) { // adds brick in each column
       for(var BrickRCord = 0; BrickRCord <= B_Row; BrickRCord++) { // adds brick in each row
        if(BrickCord(BrickCCord, BrickRCord)) {
       var BrickX = BrickCCord * B_Width;
       var BrickY = BrickRCord * B_Height;
       /////Brick
       colorRect(BrickX, BrickY, B_Width - B_Gap, B_Height - B_Gap, 'blue'); //
        }
       }
    }
}
function resetBricks() {
    for(var i = 0; i <= B_Column * B_Row; i++) {
        if(Math.random() <= 0.5) {
            brickGrid[i] = 1;
        }else {
            brickGrid[i] = 0;
        }
    }
} 
function BrickCord(BrickCCord, BrickRCord) {
    var BrickIndex = BrickCCord + B_Column*BrickRCord;
    return (brickGrid[BrickIndex] == 1);
}
function drawEverything() {
   
   //// Background 
   colorRect(0, 0, canvas.width, canvas.height,'black'); //
      
   ///// Paddle
   colorRect(PXpos, PYpos, Pwidth, Pheight, 'white'); // 
   //// Bricks 
   Brick(); ///   

   //// Ball Sprite
   Ball(BallX, BallY, 10, 'white');     //   
  
}

function moveEverything() {
    //// Ball movement
    BallX += BallXSpeed;
    BallY += BallYSpeed;

    Bounds(); ////
    BrickCord(); ///
    BallCollision();
    resetBricks(); /// 
    

    

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
    if(BallYSpeed >= 0 && BallY >= PYpos - 10  && BallX >= PXpos  && BallX <= PXpos + Pwidth && BallY <= PYpos +10) {
       BallYSpeed *= -1;

       var BDelflection = BallX - (PXpos + Pwidth/2);

       BallXSpeed = BDelflection * .25; 
       
       

    }
}  