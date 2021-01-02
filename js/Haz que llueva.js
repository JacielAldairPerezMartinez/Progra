var sketchProc = function(processingInstance) {

  with (processingInstance) {
  size(580,430);
var xPositions = [200, 250, 150];
var yPositions = [0, 150, 250];

for(var gota = 0; gota<20; gota++){
    xPositions.push(random(0,400));
    yPositions.push(random(0,400));
}

var colores=[color(79, 184, 79),color(43, 87, 153),color(135, 69, 173),color(187, 227, 57),color(16, 112, 16),color(235, 26, 96),color(237, 91, 38),color(103, 44, 158),color(86, 79, 184)];

var y=0;
var speed=2;
var g=getImage("cute/Rock");


draw = function() {
    background(204, 247, 255);
    
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(colores[i]);
        image(g,xPositions[i], yPositions[i], 20, 20);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += speed;
            if(yPositions[i]>400){
                yPositions[i]=0;
            }
    }
    //segun con este deverian rebotar hacia arriba :(//
    if (y>400) {speed=-5;}
    if (y<4) {speed=5;}
    y = y + speed; 
        
    if (mouseIsPressed){
        xPositions.push(random(0,400));
        yPositions.push(random(0,400));
    }
//No rebotan hacia arriba por alguna razon :(//    
};

}
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);