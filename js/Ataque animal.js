var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var faceW = bodyW/2;
var qw=101;
draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, qw); // body?
    ellipse(bodyX, bodyY-70, faceW, 47); // face?
    ellipse(bodyX, bodyY-113, faceW, 50);
    fill(71, 71, 71);
    fill(133, 76, 76);
    bodyX+=2;
    qw+=1;
};
	}
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
