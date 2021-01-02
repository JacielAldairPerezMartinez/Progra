var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 1, 400, 151, 0, 150);

var g=0;
for(g=0; g<280; g++){
    image(getImage("cute/WoodBlock"),g*25,200);
    image(getImage("cute/WoodBlock"),g*25,100);
}
    
fill(120, 80, 19);
rect(180, 280, 40, 77);
    
for(var x=0; x<10; x++) {
    fill(52, 147, 219);
    rect(x*160-70, 160,60, 50);
    //Pasto y arbustos
    for(var z=0; z<400; z++){
        image(getImage("cute/GrassBlock"),z*100,300);
        image(getImage("cute/TreeTall"), z*100,300,100,100);
    }
}

}
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
