function drawSymbol(x,y,size){
push()
 fill("green")
 noStroke()
 circle(x,y,size)
 triangle(x,y-size,x-size,y,x+size,y)
};
