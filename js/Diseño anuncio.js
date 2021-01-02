var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(30, 186, 214);
fill(65, 148, 44);
textSize(40);
text("Almohada suabecito", 10, 40);
fill(128, 33, 166);
textSize(17);
text("SUAVIDAD ASEGURADA", 10, 87);
textSize(12);
text("CALIDAD EN TODOS LOS PRODUCTOS!",10,120);
fill(255, 255, 255);
stroke(255, 255, 255);
ellipse(225,250,180,130);
rect(150,200,150,100);
stroke(0, 0, 0);
rect(130,320,200,1);

}
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);