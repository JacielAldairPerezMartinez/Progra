var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(89, 216, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);

var drawFish = function(centerX,centerY, bodyLength, bodyHeight, bodyColor){
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
drawFish(100,100,30,30, color(84, 179, 29));
drawFish(250,200,60,60, color(255, 0, 0));
drawFish(150,300,40,40, color(212, 198, 42));

}
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);