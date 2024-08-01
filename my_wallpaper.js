// These variables change the appearance of the overall wallpaper
let LineThickness = 1 // Sets the drawing's linework thickness: ideal values are between 0 and 3
let ColourMode = 1 // Sets colour theme of wallpaper: 1 is natural colours, 2 is bright colours, 3 is monochrome
let BackgroundMode = 3 // Sets background mode of wallpaper: 1 is blank, 2 is stripes, 3 is circles

// These variables change the size of Taco's beak and eye
let BottomBeak = 11 // Sets the size of the bottom of the beak: ideal values are between 7 and 13
let TopBeak = 20 // Sets the length of the top of the beak: ideal values are between 17 and 25
let PupilSize = 6 // Sets the size of the pupil: ideal values are between 1 and 8

// These variables contain coordinate values to change position of each element
let MilletX = 25 // Sets X coordinates of Millet drawing (controlled by the position of the top leaf)
let MilletY = 65 // Sets Y coordinates of Millet drawing (controlled by the position of the top leaf)
let LeafX = 160 // Sets X coordinates of Leaf drawing (controlled by the position of the leaf's ellipse)
let LeafY = 40 // Sets Y coordinates of Leaf drawing (controlled by the position of the leaf's ellipse)
let HeadX = 85 // Sets X coordinates of Taco drawing (controlled by the position of Taco's head)
let HeadY = 40 // Sets Y coordinates of Taco drawing (controlled by the position of Taco's head)

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 180;
  pWallpaper.grid_settings.cell_height = 180;
  pWallpaper.grid_settings.row_offset  = 90;
}

function wallpaper_background() {
  if (ColourMode == 1) {
    background(41, 143, 109); // Green
  }
  else if (ColourMode == 2) {
    background(255, 232, 140); // Yellow
  }
  else if (ColourMode == 3) {
    background(108); // Grey
  }
  else {
    background(41, 143, 109); // Green
  }
}

function my_symbol() {
  // Background pattern
  if (BackgroundMode == 1) {
    // No background pattern
  }
  else if (BackgroundMode == 2) {
    // Stripes background pattern
    draw_background_stripes();
  }
  else if (BackgroundMode == 3) {
    // Circles background pattern
    draw_background_circles();
  }

  // Millet drawing
  draw_millet(MilletX, MilletY);

  // Leaf drawing
  draw_leaf(LeafX, LeafY);

  // Taco drawing
  draw_taco(HeadX, HeadY);

}

function draw_background_stripes () {
  if(ColourMode == 1) {
    fill(32, 125, 100); // Teal
  }
  else if(ColourMode == 2) {
    fill(255, 204, 89); // Dark Yellow
  }
  else if(ColourMode == 3) {
    fill(94); // Grey
  }
  
  noStroke();
  rect(0, 0, 180, 15);
  rect(0, 30, 180, 15);
  rect(0, 60, 180, 15);
  rect(0, 90, 180, 15);
  rect(0, 120, 180, 15);
  rect(0, 150, 180, 15);  
}

function draw_background_circles () {
  if(ColourMode == 1) {
    fill(32, 125, 100); // Teal
  }
  else if(ColourMode == 2) {
    fill(255, 204, 89); // Dark Yellow
  }
  else if(ColourMode == 3) {
    fill(94); // Grey
  }

  noStroke();
  ellipse(20, 15, 30, 30);
  ellipse(40, 80, 60, 60);
  ellipse(100, 30, 40, 40);
  ellipse(130, 110, 80, 80);
  ellipse(150, 45, 20, 20);
  ellipse(60, 150, 40, 40);
}

function draw_millet (MilletX, MilletY) {
  // Millet Stalk
  if(ColourMode == 1) {
    stroke(105, 48, 20); // Brown
  }  
  else if(ColourMode == 2) {
    stroke(153, 34, 41); // Darker Pink
  }
  else if(ColourMode == 3) {
    stroke(62); // Grey
  }
  
  strokeWeight(LineThickness + (LineThickness * 2));
  noFill();
  bezier(MilletX + 1, MilletY - 5, MilletX - 6, MilletY + 25, MilletX - 1, MilletY + 70, MilletX + 44, MilletY + 85);
  strokeWeight(LineThickness);

  if(ColourMode == 1) {
    fill(196, 161, 79); // Tan
  }
  else if(ColourMode == 2) {
    fill(252, 167, 198); // Pink
  }
  else if(ColourMode == 3) {
    fill(162); // Grey
  }

  // Millet 1 (Top)
  noStroke();
  ellipse(MilletX, MilletY, 17, 17);
  triangle(MilletX - 7.3, MilletY - 4.5, MilletX + 8.5, MilletY, MilletX + 7, MilletY - 23);

  if(ColourMode == 1) {
    stroke(105, 48, 20); // Brown
  }
  else if(ColourMode == 2) {
    stroke(153, 34, 41); // Darker Pink
  }
  else if (ColourMode == 3) {
    stroke(62); // Grey
  }
  
  line(MilletX - 7.3, MilletY - 4.5, MilletX + 7, MilletY - 23); 
  line(MilletX + 8.5, MilletY, MilletX + 7, MilletY - 23);
  arc(MilletX, MilletY, 17, 17, 0, 210);

  // Millet 2
  noStroke();
  ellipse(MilletX + 1, MilletY + 35, 18, 18);
  beginShape();
  vertex(MilletX - 7.5, MilletY + 38);
  vertex(MilletX - 20, MilletY + 17);
  quadraticVertex(MilletX - 8, MilletY + 17, MilletX - 1, MilletY + 26);
  quadraticVertex(MilletX + 1, MilletY + 17, MilletX + 13, MilletY + 13);
  vertex(MilletX + 10, MilletY + 35);
  endShape(CLOSE);

  if(ColourMode == 1) {
    stroke(105, 48, 20); // Brown
  }
  else if(ColourMode == 2) {
    stroke(153, 34, 41); // Darker Pink
  }
  else if(ColourMode == 3) {
    stroke(62); // Grey
  }

  beginShape();
  vertex(MilletX - 7.5, MilletY + 38);
  vertex(MilletX - 20, MilletY + 17);
  quadraticVertex(MilletX - 8, MilletY + 17, MilletX - 1, MilletY + 26);
  quadraticVertex(MilletX + 1, MilletY + 17, MilletX + 13, MilletY + 13);
  vertex(MilletX + 10, MilletY + 35);
  endShape();
  arc(MilletX + 1, MilletY + 35, 18, 18, 0, 160);

  // Millet 3
  noStroke();
  ellipse(MilletX + 14, MilletY + 65, 19, 19);
  beginShape();
  vertex(MilletX + 7.5, MilletY + 72);
  vertex(MilletX - 11, MilletY + 60);
  quadraticVertex(MilletX - 3, MilletY+ 55.5, MilletX + 8, MilletY + 57);
  quadraticVertex(MilletX + 8, MilletY + 48, MilletX + 16, MilletY + 40);
  vertex(MilletX + 22.5, MilletY + 60.5);
  endShape(CLOSE);

  if(ColourMode == 1) {
    stroke(105, 48, 20); // Brown
  }
  else if(ColourMode == 2) {
    stroke(153, 34, 41); // Darker Pink
  }
  else if(ColourMode == 3) {
    stroke(62); // Grey
  }
  
  beginShape();
  vertex(MilletX + 7.5, MilletY + 72);
  vertex(MilletX - 11, MilletY + 60);
  quadraticVertex(MilletX - 3, MilletY+ 55.5, MilletX + 8, MilletY + 57);
  quadraticVertex(MilletX + 8, MilletY + 48, MilletX + 16, MilletY + 40);
  vertex(MilletX + 22.5, MilletY + 60.5);
  endShape();
  arc(MilletX + 14, MilletY + 65, 19, 19, 337, 130);

  // Millet 4 (Bottom)
  noStroke();
  ellipse(MilletX + 44, MilletY + 85, 20, 20);
  beginShape();
  vertex(MilletX + 41, MilletY + 94.5);
  vertex(MilletX + 17, MilletY + 91);
  quadraticVertex(MilletX + 23, MilletY + 82, MilletX + 34.5, MilletY + 81);
  quadraticVertex(MilletX + 30, MilletY + 70, MilletX + 35, MilletY + 60);
  vertex(MilletX + 51.5, MilletY + 78.5);
  endShape(CLOSE);

  if(ColourMode == 1) {
    stroke(105, 48, 20); // Brown
  }
  else if(ColourMode == 2) {
    stroke(153, 34, 41); // Darker Pink
  }
  else if(ColourMode == 3) {
    stroke(62); // Grey
  }

  beginShape();
  vertex(MilletX + 41, MilletY + 94.5);
  vertex(MilletX + 17, MilletY + 91);
  quadraticVertex(MilletX + 23, MilletY + 82, MilletX + 34.5, MilletY + 81);
  quadraticVertex(MilletX + 30, MilletY + 70, MilletX + 35, MilletY + 60);
  vertex(MilletX + 51.5, MilletY + 78.5);
  endShape();
  arc(MilletX + 44, MilletY + 85, 20, 20, 320, 110);  
}

function draw_leaf (LeafX, LeafY) {
  // Leaf
  if(ColourMode == 1) {
    fill(17, 97, 39); // Dark Green
  }
  else if(ColourMode == 2) {
    fill(94, 107, 191); // Dark Blue
  }
  else if(ColourMode == 3) {
    fill(66); // Grey
  }

  noStroke();
  ellipse(LeafX, LeafY, 20, 20);
  beginShape();
  vertex(LeafX - 8.5, LeafY + 5.5);
  vertex(LeafX + 10, LeafY + 26);
  vertex(LeafX + 10, LeafY);
  endShape(CLOSE);

  // Linework
  if(ColourMode == 1) {
    stroke(8, 59, 48); // Darker Green
  }
  else if(ColourMode == 2) {
    stroke(13, 24, 89); // Darker Blue
  }
  else if(ColourMode == 3) {
    stroke(42); // Grey
  }

  arc(LeafX, LeafY, 20, 20, 140, 0);
  line(LeafX - 8.5, LeafY + 5.5, LeafX + 10, LeafY + 26);
  line(LeafX + 10, LeafY + 26, LeafX + 10, LeafY);
  noFill();
  bezier(LeafX + 3, LeafY + 7, LeafX - 4, LeafY - 2, LeafX - 4, LeafY - 14, LeafX + 4, LeafY - 21);
}

function draw_taco(HeadX, HeadY) {

  // Beak
  if(ColourMode == 1) {
    fill(217, 114, 4); // Dark Orange
    stroke(163, 63, 0); // Darker Orange
  }
  else if(ColourMode == 2) {
    fill(189, 94, 104); // Dark Pink
    stroke(153, 34, 41); // Darker Pink
  }
  else if(ColourMode == 3) {
    fill(132); // Grey
    stroke(86); // Grey
  }
  
  ellipse(HeadX - 12, HeadY + 2, BottomBeak, BottomBeak);

  if(ColourMode == 1) {
    fill(250, 169, 20); // Orange
  }
  else if(ColourMode == 2) {
    fill(252, 167, 198); // Pink
  }
  else if(ColourMode == 3) {
    fill(176);// Grey
  }
  
  beginShape();
  vertex(HeadX - 10, HeadY - 5);
  quadraticVertex(HeadX - 22, HeadY - 3, HeadX - TopBeak, HeadY + 8);
  quadraticVertex(HeadX - 16, HeadY - 2, HeadX, HeadY + 8);
  endShape(CLOSE);

  // Body
  if(ColourMode == 1) {
    fill(252, 219, 3); // Yellow
  }
  else if(ColourMode == 2) {
    fill(114, 236, 247); // Blue
  }
  else if(ColourMode == 3) {
    fill(204); // Grey
  }
  
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
  if(LineThickness > 1) { // If the lines are thicker than 1, then change size of pupil
    fill(255); // White
    stroke(40);
    ellipse(HeadX - 1.5, HeadY - 1, 11, 11);

    fill(40); // Black
    ellipse(HeadX - 1.5, HeadY - 1, PupilSize - (PupilSize / 2), PupilSize - (PupilSize / 2));    
  }
  else {
    fill(255); // White
    stroke(40);
    ellipse(HeadX - 1.5, HeadY - 1, 11, 11);

    fill(40); // Black
    ellipse(HeadX - 1.5, HeadY - 1, PupilSize, PupilSize);
  }

  // Linework
  noFill();

  if(ColourMode == 1) {
    stroke(191, 140, 0); // Dark Yellow
  }
  else if(ColourMode == 2) {
    stroke(13, 75, 145); // Dark Blue
  }
  else if(ColourMode == 3) {
    stroke(139); // Grey
  }
  
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
  strokeWeight(LineThickness + 2);

  if(ColourMode == 1) {
    stroke(217, 114, 4); // Dark Orange
  }
  else if(ColourMode == 2) {
    stroke(189, 94, 104); // Dark Pink
  }
  else if(ColourMode == 3) {
    stroke(132); // Grey
  }
  
  line(HeadX + 20, HeadY + 52, HeadX + 14, HeadY + 58);
  line(HeadX + 20, HeadY + 52, HeadX + 18, HeadY + 60);
  line(HeadX + 10, HeadY + 50, HeadX + 4, HeadY + 56);
  line(HeadX + 10, HeadY + 50, HeadX + 8, HeadY + 58);

  // Cheek Feathers

  if(ColourMode == 1) {
    stroke(23, 164, 207); // Blue
  }
  else if(ColourMode == 2) {
    stroke(94, 107, 191); // Dark Blue
  }
  else if(ColourMode == 3) {
    stroke(127); // Grey
  }
  
  line(HeadX, HeadY + 10, HeadX + 1, HeadY + 13);
  line(HeadX + 5, HeadY + 8, HeadX + 6.5, HeadY + 10.5);
}
