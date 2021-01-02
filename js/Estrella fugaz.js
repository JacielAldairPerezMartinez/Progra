var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var x = 20;
var y = 180;
var w= 152;
var q= 205;
var z=100;

draw = function() {
    background(0, 0, 0);
    fill(255, 242, 0);
    ellipse(x, y, 15, 15);
    
    fill(245, 240, 240);
    ellipse(w, q,15,15);
    
    fill(255, 0, 0);
    ellipse(z,110,15,15);
    fill(247, 247, 247);
    rect(95,100,50,20,0);
    ellipse(100,120,20,20);
    
    x ++;
    w --;
    z ++;
};

	}
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
