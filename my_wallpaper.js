//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let pupil_size = 8; // Originally 8
let beak_length = 22; // Originally 22
let line_weight = 2; // Originally 2

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(41, 143, 109); // Green
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // Draw bird's body
  drawBird(70, 50); // Top Left
  drawBird(150, 50); // Top Right
  drawBird(70, 120); // Bottom Left
  drawBird(150, 120); // Bottom Right  
}

function drawBird(HeadX, HeadY) {
  // Draw feet
  stroke(255, 161, 209); // Pink
  strokeWeight(line_weight);
  line(HeadX - 17, HeadY + 30, HeadX - 17, HeadY + 43);
  line(HeadX - 17, HeadY + 43, HeadX - 9, HeadY + 43);
  line(HeadX - 4, HeadY + 30, HeadX - 4, HeadY + 43);
  line(HeadX - 4, HeadY + 43, HeadX + 4, HeadY + 43);

  noStroke();

  // Draw beak
  fill(240, 179, 12); // Orange
  beginShape();
  vertex(HeadX + 10, HeadY - 7);
  vertex(HeadX + beak_length, HeadY + 4);
  vertex(HeadX + 10, HeadY + 4);
  endShape(CLOSE);  

  fill(245, 245, 44); // Yellow

  // Head
  ellipse(HeadX, HeadY, 30, 30);

  // Belly
  ellipse(HeadX + 5, HeadY + 25, 20, 20);

  // Tail
  beginShape();
  vertex(HeadX + 15, HeadY);
  vertex(HeadX + 15, HeadY + 25);
  vertex(HeadX + 5, HeadY + 35);
  vertex(HeadX - 40, HeadY +35);
  vertex(HeadX - 14, HeadY - 6);
  endShape(CLOSE);

  // Draw eye
  fill(255);
  ellipse(HeadX + 2, HeadY - 2, pupil_size + 7, pupil_size + 7);
  fill(40);
  ellipse(HeadX + 2, HeadY - 2, pupil_size, pupil_size);

  // Draw wing
  noFill();
  stroke(240, 179, 12); // Orange
  strokeWeight(line_weight);
  arc(HeadX - 15, HeadY + 13, 20, 20, 0, 90);
  line(HeadX - 32.5, HeadY + 23, HeadX - 15, HeadY + 23);
  line(HeadX - 27, HeadY + 23, HeadX - 23, HeadY + 18);
  line(HeadX - 20, HeadY + 23, HeadX - 16, HeadY + 18);
}
