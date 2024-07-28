

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
  ellipse(88, 52, 12, 11);

  fill(250, 169, 20); // Orange
  vertex(90, 45);
  quadraticVertex(78, 47, 80, 58);
  quadraticVertex(84, 48, 100, 58);
  endShape(CLOSE);

  // Body
  fill(252, 219, 3); // Yellow

  beginShape();
  vertex(101, 91);
  vertex(88, 53);
  vertex(110.5, 43);
  vertex(165, 106);
  quadraticVertex(110, 100, 115, 70);
  endShape(CLOSE);

  ellipse(100, 50, 25, 25);
  ellipse(120, 85, 40, 40);
  ellipse(138, 170, 10, 10);

  beginShape();
  vertex(133, 170);
  vertex(123, 100);
  vertex(143, 90);
  vertex(143, 170);
  endShape(CLOSE);

  // Eyes
  fill(255); // White
  ellipse(99, 50, 11, 11);

  fill(0); // Black
  ellipse(99, 50, 6, 6);


}
