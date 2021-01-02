var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);

background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 
//Pastel sensillo
fill(213, 163, 230);
triangle(200,340,300,100,100,100);
fill(235, 224, 101);
var x=20;
var y=100;
ellipse(100,y,x,x);
ellipse(135,y,x,x);
ellipse(165,y,x,x);
ellipse(195,y,x,x);
ellipse(225,y,x,x);
ellipse(255,y,x,x);
ellipse(290,y,x,x);
fill(224, 191, 191);
ellipse(200,330,x,x);

	}
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
