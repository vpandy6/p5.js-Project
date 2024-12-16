let lineX, lineY;
let colorPicker;

function setup() {
  createCanvas(800, 600);
  background(255);

 
  colorPicker = createColorPicker('#000000');
  colorPicker.position(10, 10); // Position on screen
}

function draw() {
  if (mouseIsPressed) {
    stroke(colorPicker.color());
    strokeWeight(4);

    if (lineX !== undefined && lineY !== undefined) {
      line(lineX, lineY, mouseX, mouseY);
    }
  }
  lineX = mouseX;
  lineY = mouseY;
}

function keyPressed() { //canvas cleared 
  if (key === 'c') {
    background(255); 
  }
}
