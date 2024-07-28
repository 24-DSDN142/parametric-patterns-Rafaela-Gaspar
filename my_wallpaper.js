

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

function my_symbol() {


  // Beak
  fill(217, 114, 4); // Dark Orange
  stroke(163, 63, 0); // Darker Orange
  ellipse(88, 52, 12, 11);
  fill(250, 169, 20); // Orange
  vertex(90, 45);
  quadraticVertex(78, 47, 80, 58);
  quadraticVertex(84, 48, 100, 58);
  endShape(CLOSE);

  // Body
  fill(252, 219, 3); // Yellow
  noStroke();
  beginShape();
  vertex(101, 91);
  vertex(88, 53);
  vertex(110.5, 43);
  vertex(165, 106);
  quadraticVertex(110, 100, 115, 70);
  endShape(CLOSE);

  // Head, belly, tail ellipses
  ellipse(100, 50, 25, 25);
  ellipse(120, 85, 40, 40);
  ellipse(138, 170, 10, 10);

  // Tail
  beginShape();
  vertex(133, 170);
  vertex(123, 100);
  vertex(143, 90);
  vertex(143, 170);
  endShape(CLOSE);

  // Eyes
  fill(255); // White
  stroke(40);
  ellipse(98.5, 49, 11, 11);

  fill(40); // Black
  ellipse(98.5, 49, 6, 6);

  // Linework
  noFill();
  stroke(191, 140, 0);
  beginShape();
  vertex(110.5, 43);
  vertex(165, 106);
  quadraticVertex(110, 100, 115, 70);
  endShape();
  arc(100, 50, 25, 25, 155, 323);
  line(101, 91, 88, 53);
  arc(120, 85, 40, 40, 80, 170);
  line(133, 170, 124, 104.5);
  arc(138, 170, 10, 10, 0, 180);
  line(143, 102.5, 143, 170);

  // Feet
  strokeWeight(3);
  stroke(217, 114, 4); // Dark Orange
  line(120, 102, 114, 108);
  line(120, 102, 118, 110);
  line(110, 100, 104, 106);
  line(110, 100, 108, 108);

  // Cheek Feathers
  stroke(23, 164, 207); // Blue
  line(100, 60, 101, 63);
  line(105, 58, 106.5, 60.5);
}
