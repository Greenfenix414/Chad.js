function prINT(i) {
  print(int(i));
}
function blob(i) {
  this.x = windowWidth / 2;
  this.count = 0;
  this.count2 = 50;
  this.above0 = true;
  this.drawBlob = function () {
    push();
    translate(this.x, windowHeight - 25);
    fill(i);
    noStroke();
    circle(0, 0, 50);
    beginClip();
    circle(15, -10, 10);
    circle(-15, -10, 10);
    endClip();
    fill("black");
    circle(15, -10, 10);
    circle(-15, -10, 10);
    fill("white");
    circle(12, -13, 5);
    circle(-18, -13, 5);
    this.count2 = random(-50, 50);
    if (this.count2 > 0) {
      this.above0 = true;
    }
    if (this.count2 <= 0) {
      this.above0 = false;
    }
    if (this.above0 == true) {
      if (this.count < this.count2) {
        this.x++;
        this.count++;
      } else {
        this.count2 = random(-50, 50);
      }
    } else if (this.above0 == false) {
      if (this.count >= this.count2) {
        this.x--;
        this.count--;
      } else {
        this.count2 = random(-50, 50);
      }
    }
    pop();
  };
}
