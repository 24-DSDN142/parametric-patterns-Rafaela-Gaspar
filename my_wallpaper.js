

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
  // Millet Stalk
  stroke(105, 48, 20); // Brown
  strokeWeight(3);
  noFill();
  bezier(52, 70, 45, 100, 50, 146, 95, 160);
  strokeWeight(1);
  fill(196, 161, 79); // Tan

  // Millet 1 (Top)
  noStroke();
  ellipse(51, 75, 17, 17);
  triangle(43.7, 70.5, 59.5, 75, 58, 52);

  stroke(105, 48, 20); // Brown
  line(43.7, 70.5, 58, 52); 
  line(59.5, 75, 58, 52);
  arc(51, 75, 17, 17, 0, 210);

  // Millet 2
  noStroke();
  ellipse(52, 110, 18, 18);
  beginShape();
  vertex(43.5, 113);
  vertex(33, 92);
  quadraticVertex(43, 92, 50, 101);
  quadraticVertex(52, 92, 62, 88);
  vertex(61, 110);
  endShape(CLOSE);

  stroke(105, 48, 20); // Brown
  beginShape();
  vertex(43.5, 113);
  vertex(33, 92);
  quadraticVertex(43, 92, 50, 101);
  quadraticVertex(52, 92, 62, 88);
  vertex(61, 110);
  endShape();
  arc(52, 110, 18, 18, 0, 160);

  // Millet 3
  noStroke();
  ellipse(65, 140, 19, 19);
  beginShape();
  vertex(58.5, 147);
  vertex(40, 135);
  quadraticVertex(48, 130.5, 59, 132);
  quadraticVertex(59, 123, 67, 115);
  vertex(73.5, 135.5);
  endShape(CLOSE);

  stroke(105, 48, 20); // Brown
  beginShape();
  vertex(58.5, 147);
  vertex(40, 135);
  quadraticVertex(48, 130.5, 59, 132);
  quadraticVertex(59, 123, 67, 115);
  vertex(73.5, 135.5);
  endShape();
  arc(65, 140, 19, 19, 337, 130);

  //Millet 4 (Bottom)
  noStroke();
  ellipse(95, 160, 20, 20);
  beginShape();
  vertex(92, 169.5);
  vertex(68, 166);
  quadraticVertex(74, 157, 85.5, 156);
  quadraticVertex(81, 145, 86, 135);
  vertex(102.5, 153.5);
  endShape(CLOSE);

  stroke(105, 48, 20); // Brown
  beginShape();
  vertex(92, 169.5);
  vertex(68, 166);
  quadraticVertex(74, 157, 85.5, 156);
  quadraticVertex(81, 145, 86, 135);
  vertex(102.5, 153.5);
  endShape();
  arc(95, 160, 20, 20, 320, 110);

  // Leaf
  draw_leaf(160, 50); // Originally 160, 50

  // Taco
  draw_taco(100, 50); // Originally 100, 50



}

function draw_leaf (LeafX, LeafY) {
  // Leaf
  fill(17, 97, 39); // Dark Green
  noStroke();
  ellipse(LeafX, LeafY, 20, 20);
  beginShape();
  vertex(LeafX - 8.5, LeafY + 5.5);
  vertex(LeafX + 10, LeafY + 26);
  vertex(LeafX + 10, LeafY);
  endShape(CLOSE);

  // Linework
  stroke(8, 59, 48); // Darker Green
  arc(LeafX, LeafY, 20, 20, 140, 0);
  line(LeafX - 8.5, LeafY + 5.5, LeafX + 10, LeafY + 26);
  line(LeafX + 10, LeafY + 26, LeafX + 10, LeafY);
  noFill();
  bezier(LeafX + 3, LeafY + 7, LeafX - 4, LeafY - 2, LeafX - 4, LeafY - 14, LeafX + 4, LeafY - 21);
}

function draw_taco(HeadX, HeadY) {
  // Beak
  fill(217, 114, 4); // Dark Orange
  stroke(163, 63, 0); // Darker Orange
  ellipse(HeadX - 12, HeadY + 2, 12, 11);
  fill(250, 169, 20); // Orange
  beginShape();
  vertex(HeadX - 10, HeadY - 5);
  quadraticVertex(HeadX - 22, HeadY - 3, HeadX - 20, HeadY + 8);
  quadraticVertex(HeadX - 16, HeadY - 2, HeadX, HeadY + 8);
  endShape(CLOSE);

  // Body
  fill(252, 219, 3); // Yellow
  noStroke();
  beginShape();
  vertex(HeadX + 1, HeadY + 41);
  vertex(HeadX - 12, HeadY + 3);
  vertex(HeadX + 10.5, HeadY - 7);
  vertex(HeadX + 65, HeadY + 56);
  quadraticVertex(HeadX + 10, HeadY + 50, HeadX + 15, HeadY + 20);
  endShape(CLOSE);

  // Head, belly, tail ellipses
  ellipse(HeadX, HeadY, 25, 25);
  ellipse(HeadX + 20, HeadY + 35, 40, 40);
  ellipse(HeadX + 38, HeadY+ 120, 10, 10);

  // Tail
  beginShape();
  vertex(HeadX + 33, HeadY + 120);
  vertex(HeadX + 23, HeadY + 50);
  vertex(HeadX + 43, HeadY + 40);
  vertex(HeadX + 43, HeadY + 120);
  endShape(CLOSE);

  // Eyes
  fill(255); // White
  stroke(40);
  ellipse(HeadX - 1.5, HeadY - 1, 11, 11);

  fill(40); // Black
  ellipse(HeadX - 1.5, HeadY - 1, 6, 6);

  // Linework
  noFill();
  stroke(191, 140, 0);
  beginShape();
  vertex(HeadX + 10.5, HeadY - 7);
  vertex(HeadX + 65, HeadY + 56);
  quadraticVertex(HeadX + 10, HeadY + 50, HeadX + 15, HeadY + 20);
  endShape();
  arc(HeadX, HeadY, 25, 25, 155, 323);
  line(HeadX + 1, HeadY + 41, HeadX - 12, HeadY + 3);
  arc(HeadX + 20, HeadY + 35, 40, 40, 80, 170);
  line(HeadX + 33, HeadY + 120, HeadX + 24, HeadY + 54.5);
  arc(HeadX + 38, HeadY + 120, 10, 10, 0, 180);
  line(HeadX + 43, HeadY + 52.5, HeadX + 43, HeadY + 120);

  // Feet
  strokeWeight(3);
  stroke(217, 114, 4); // Dark Orange
  line(HeadX + 20, HeadY + 52, HeadX + 14, HeadY + 58);
  line(HeadX + 20, HeadY + 52, HeadX + 18, HeadY + 60);
  line(HeadX + 10, HeadY + 50, HeadX + 4, HeadY + 56);
  line(HeadX + 10, HeadY + 50, HeadX + 8, HeadY + 58);

  // Cheek Feathers
  stroke(23, 164, 207); // Blue
  line(HeadX, HeadY + 10, HeadX + 1, HeadY + 13);
  line(HeadX + 5, HeadY + 8, HeadX + 6.5, HeadY + 10.5);
}
