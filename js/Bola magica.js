var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 0) {
    text("NOT", 176, 200);
    text("HAPPENING!", 159, 229); 
}
else if (answer===2){
    text("SI", 159, 229);
}
else if (answer===3){
    text("NO", 159, 229);
}
else if (answer===4){
    text("NO LO SE", 159, 229);
}
else if(answer===5){
    text("ES CORRECTO", 159, 229);
}

  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
