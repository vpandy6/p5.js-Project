let prevX, prevY;
let colorPicker;

function setup() {
  createCanvas(800, 600);
  background(255);

  // Create color picker
  colorPicker = createColorPicker('#000000');
  colorPicker.position(10, 10); // Position on screen
}

function draw() {
  if (mouseIsPressed) {
    stroke(colorPicker.color());
    strokeWeight(4);

    if (prevX !== undefined && prevY !== undefined) {
      line(prevX, prevY, mouseX, mouseY);
    }
  }
  prevX = mouseX;
  prevY = mouseY;
}

function keyPressed() {
  if (key === 'c') {
    background(255); // Clear canvas when 'c' is pressed
  }
}
