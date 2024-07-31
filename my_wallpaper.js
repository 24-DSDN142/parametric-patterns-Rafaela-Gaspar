let LineThickness = 1 // Sets the drawing's linework thickness: ideal values are between 0.1 and 3
let ColourMode = 2 // Sets colour theme of wallpaper: 1 is natural colours, 2 is bright colours, 3 is monochrome
let BackgroundMode = 3 // Sets background mode of wallpaper: 1 is blank, 2 is stripes, 3 is circles

let MilletX = 25 // Sets X coordinates of Millet drawing (controlled by the position of the top leaf)
let MilletY = 65 // Sets Y coordinates of Millet drawing (controlled by the position of the top leaf)
let LeafX = 160 // Sets X coordinates of Leaf drawing (controlled by the position of the leaf's ellipse)
let LeafY = 40 // Sets Y coordinates of Leaf drawing (controlled by the position of the leaf's ellipse)
let HeadX = 85 // Sets X coordinates of Taco drawing (controlled by the position of the head)
let HeadY = 40 // Sets Y coordinates of Taco drawing (controlled by the position of the head)

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 180;
  pWallpaper.grid_settings.cell_height = 180;
  pWallpaper.grid_settings.row_offset  = 90;
}

function wallpaper_background() {
  background(41, 143, 109); // Green
}

function my_symbol() {
  // Background pattern
  if (BackgroundMode == 1) {
    // No background
  }
  else if (BackgroundMode == 2) {
    // Stripes background
    draw_background_stripes();
  }
  else if (BackgroundMode == 3) {
    // Circles background
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
    noStroke();
    fill(32, 125, 100); // Teal
    rect(0, 0, 180, 15);
    rect(0, 30, 180, 15);
    rect(0, 60, 180, 15);
    rect(0, 90, 180, 15);
    rect(0, 120, 180, 15);
    rect(0, 150, 180, 15);
  }
  else if(ColourMode == 2) {
    noStroke();
    fill(32, 125, 100); // CHANGE COLOUR HERE
    rect(0, 0, 180, 15);
    rect(0, 30, 180, 15);
    rect(0, 60, 180, 15);
    rect(0, 90, 180, 15);
    rect(0, 120, 180, 15);
    rect(0, 150, 180, 15);  
  }
  else if(ColourMode == 3) {
    noStroke();
    fill(32, 125, 100); // CHANGE COLOUR HERE
    rect(0, 0, 180, 15);
    rect(0, 30, 180, 15);
    rect(0, 60, 180, 15);
    rect(0, 90, 180, 15);
    rect(0, 120, 180, 15);
    rect(0, 150, 180, 15);  
  }
}

function draw_background_circles () {
  if(ColourMode == 1) {
    noStroke();
    fill(32, 125, 100); // Teal

    ellipse(20, 15, 30, 30);
    ellipse(40, 80, 60, 60);
    ellipse(100, 30, 40, 40);
    ellipse(130, 110, 80, 80);
    ellipse(150, 45, 20, 20);
    ellipse(60, 150, 40, 40);
  }
  else if(ColourMode == 2) {
    noStroke();
    fill(32, 125, 100); // CHANGE COLOUR HERE

    ellipse(20, 15, 30, 30);
    ellipse(40, 80, 60, 60);
    ellipse(100, 30, 40, 40);
    ellipse(130, 110, 80, 80);
    ellipse(150, 45, 20, 20);
    ellipse(60, 150, 40, 40);
  }
  else if(ColourMode == 3) {
    noStroke();
    fill(32, 125, 100); // CHANGE COLOUR HERE

    ellipse(20, 15, 30, 30);
    ellipse(40, 80, 60, 60);
    ellipse(100, 30, 40, 40);
    ellipse(130, 110, 80, 80);
    ellipse(150, 45, 20, 20);
    ellipse(60, 150, 40, 40);
  }
}

function draw_millet (MilletX, MilletY) {
  if(ColourMode == 1) {
    // Millet Stalk
    stroke(105, 48, 20); // Brown
    strokeWeight(LineThickness + (LineThickness * 2));
    noFill();
    bezier(MilletX + 1, MilletY - 5, MilletX - 6, MilletY + 25, MilletX - 1, MilletY + 70, MilletX + 44, MilletY + 85);
    strokeWeight(LineThickness);
    fill(196, 161, 79); // Tan

    // Millet 1 (Top)
    noStroke();
    ellipse(MilletX, MilletY, 17, 17);
    triangle(MilletX - 7.3, MilletY - 4.5, MilletX + 8.5, MilletY, MilletX + 7, MilletY - 23);

    stroke(105, 48, 20); // Brown
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

    stroke(105, 48, 20); // Brown
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

    stroke(105, 48, 20); // Brown
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

    stroke(105, 48, 20); // Brown
    beginShape();
    vertex(MilletX + 41, MilletY + 94.5);
    vertex(MilletX + 17, MilletY + 91);
    quadraticVertex(MilletX + 23, MilletY + 82, MilletX + 34.5, MilletY + 81);
    quadraticVertex(MilletX + 30, MilletY + 70, MilletX + 35, MilletY + 60);
    vertex(MilletX + 51.5, MilletY + 78.5);
    endShape();
    arc(MilletX + 44, MilletY + 85, 20, 20, 320, 110);  
  }
  else if(ColourMode == 2) {
    // Millet Stalk
    stroke(105, 48, 20); // CHANGE COLOUR HERE
    strokeWeight(LineThickness + (LineThickness * 2));
    noFill();
    bezier(MilletX + 1, MilletY - 5, MilletX - 6, MilletY + 25, MilletX - 1, MilletY + 70, MilletX + 44, MilletY + 85);
    strokeWeight(LineThickness);
    fill(196, 161, 79); // CHANGE COLOUR HERE

    // Millet 1 (Top)
    noStroke();
    ellipse(MilletX, MilletY, 17, 17);
    triangle(MilletX - 7.3, MilletY - 4.5, MilletX + 8.5, MilletY, MilletX + 7, MilletY - 23);

    stroke(105, 48, 20); // CHANGE COLOUR HERE
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

    stroke(105, 48, 20); // CHANGE COLOUR HERE
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

    stroke(105, 48, 20); // CHANGE COLOUR HERE
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

    stroke(105, 48, 20); // CHANGE COLOUR HERE
    beginShape();
    vertex(MilletX + 41, MilletY + 94.5);
    vertex(MilletX + 17, MilletY + 91);
    quadraticVertex(MilletX + 23, MilletY + 82, MilletX + 34.5, MilletY + 81);
    quadraticVertex(MilletX + 30, MilletY + 70, MilletX + 35, MilletY + 60);
    vertex(MilletX + 51.5, MilletY + 78.5);
    endShape();
    arc(MilletX + 44, MilletY + 85, 20, 20, 320, 110);  
  }
  else if(ColourMode == 3) {
    // Millet Stalk
    stroke(105, 48, 20); // CHANGE COLOUR HERE
    strokeWeight(LineThickness + (LineThickness * 2));
    noFill();
    bezier(MilletX + 1, MilletY - 5, MilletX - 6, MilletY + 25, MilletX - 1, MilletY + 70, MilletX + 44, MilletY + 85);
    strokeWeight(LineThickness);
    fill(196, 161, 79); // CHANGE COLOUR HERE

    // Millet 1 (Top)
    noStroke();
    ellipse(MilletX, MilletY, 17, 17);
    triangle(MilletX - 7.3, MilletY - 4.5, MilletX + 8.5, MilletY, MilletX + 7, MilletY - 23);

    stroke(105, 48, 20); // CHANGE COLOUR HERE
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

    stroke(105, 48, 20); // CHANGE COLOUR HERE
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

    stroke(105, 48, 20); // CHANGE COLOUR HERE
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

    stroke(105, 48, 20); // CHANGE COLOUR HERE
    beginShape();
    vertex(MilletX + 41, MilletY + 94.5);
    vertex(MilletX + 17, MilletY + 91);
    quadraticVertex(MilletX + 23, MilletY + 82, MilletX + 34.5, MilletY + 81);
    quadraticVertex(MilletX + 30, MilletY + 70, MilletX + 35, MilletY + 60);
    vertex(MilletX + 51.5, MilletY + 78.5);
    endShape();
    arc(MilletX + 44, MilletY + 85, 20, 20, 320, 110);  
  }
}

function draw_leaf (LeafX, LeafY) {
  if(ColourMode == 1) {
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
  else if(ColourMode == 2) {
    // Leaf
    fill(17, 97, 39); // CHANGE COLOUR HERE
    noStroke();
    ellipse(LeafX, LeafY, 20, 20);
    beginShape();
    vertex(LeafX - 8.5, LeafY + 5.5);
    vertex(LeafX + 10, LeafY + 26);
    vertex(LeafX + 10, LeafY);
    endShape(CLOSE);

    // Linework
    stroke(8, 59, 48); // CHANGE COLOUR HERE
    arc(LeafX, LeafY, 20, 20, 140, 0);
    line(LeafX - 8.5, LeafY + 5.5, LeafX + 10, LeafY + 26);
    line(LeafX + 10, LeafY + 26, LeafX + 10, LeafY);
    noFill();
    bezier(LeafX + 3, LeafY + 7, LeafX - 4, LeafY - 2, LeafX - 4, LeafY - 14, LeafX + 4, LeafY - 21);
  }
  else if(ColourMode == 3) {
    // Leaf
    fill(17, 97, 39); // CHANGE COLOUR HERE
    noStroke();
    ellipse(LeafX, LeafY, 20, 20);
    beginShape();
    vertex(LeafX - 8.5, LeafY + 5.5);
    vertex(LeafX + 10, LeafY + 26);
    vertex(LeafX + 10, LeafY);
    endShape(CLOSE);

    // Linework
    stroke(8, 59, 48); // CHANGE COLOUR HERE
    arc(LeafX, LeafY, 20, 20, 140, 0);
    line(LeafX - 8.5, LeafY + 5.5, LeafX + 10, LeafY + 26);
    line(LeafX + 10, LeafY + 26, LeafX + 10, LeafY);
    noFill();
    bezier(LeafX + 3, LeafY + 7, LeafX - 4, LeafY - 2, LeafX - 4, LeafY - 14, LeafX + 4, LeafY - 21);
  }
}

function draw_taco(HeadX, HeadY) {
  if(ColourMode == 1) {
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
    if(LineThickness > 1) { // If the lines are thicker than 1, then change size of pupil
      fill(255); // White
      stroke(40);
      ellipse(HeadX - 1.5, HeadY - 1, 11, 11);

      fill(40); // Black
      ellipse(HeadX - 1.5, HeadY - 1, 3, 3);    
    }
    else {
      fill(255); // White
      stroke(40);
      ellipse(HeadX - 1.5, HeadY - 1, 11, 11);

      fill(40); // Black
      ellipse(HeadX - 1.5, HeadY - 1, 6, 6);
    }

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
    strokeWeight(LineThickness + 2);
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
  else if(ColourMode == 2) {
    // Beak
    fill(217, 114, 4); // CHANGE COLOUR HERE
    stroke(163, 63, 0); // CHANGE COLOUR HERE
    ellipse(HeadX - 12, HeadY + 2, 12, 11);
    fill(250, 169, 20);// CHANGE COLOUR HERE
    beginShape();
    vertex(HeadX - 10, HeadY - 5);
    quadraticVertex(HeadX - 22, HeadY - 3, HeadX - 20, HeadY + 8);
    quadraticVertex(HeadX - 16, HeadY - 2, HeadX, HeadY + 8);
    endShape(CLOSE);

    // Body
    fill(252, 219, 3); // CHANGE COLOUR HERE
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
      fill(255); // CHANGE COLOUR HERE
      stroke(40);
      ellipse(HeadX - 1.5, HeadY - 1, 11, 11);

      fill(40); // CHANGE COLOUR HERE
      ellipse(HeadX - 1.5, HeadY - 1, 3, 3);    
    }
    else {
      fill(255); // CHANGE COLOUR HERE
      stroke(40);
      ellipse(HeadX - 1.5, HeadY - 1, 11, 11);

      fill(40); // CHANGE COLOUR HERE
      ellipse(HeadX - 1.5, HeadY - 1, 6, 6);
    }

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
    strokeWeight(LineThickness + 2);
    stroke(217, 114, 4); // CHANGE COLOUR HERE
    line(HeadX + 20, HeadY + 52, HeadX + 14, HeadY + 58);
    line(HeadX + 20, HeadY + 52, HeadX + 18, HeadY + 60);
    line(HeadX + 10, HeadY + 50, HeadX + 4, HeadY + 56);
    line(HeadX + 10, HeadY + 50, HeadX + 8, HeadY + 58);

    // Cheek Feathers
    stroke(23, 164, 207); // CHANGE COLOUR HERE
    line(HeadX, HeadY + 10, HeadX + 1, HeadY + 13);
    line(HeadX + 5, HeadY + 8, HeadX + 6.5, HeadY + 10.5);
  }
  else if(ColourMode == 3) {
    // Beak
    fill(217, 114, 4); // CHANGE COLOUR HERE
    stroke(163, 63, 0); // CHANGE COLOUR HERE
    ellipse(HeadX - 12, HeadY + 2, 12, 11);
    fill(250, 169, 20);// CHANGE COLOUR HERE
    beginShape();
    vertex(HeadX - 10, HeadY - 5);
    quadraticVertex(HeadX - 22, HeadY - 3, HeadX - 20, HeadY + 8);
    quadraticVertex(HeadX - 16, HeadY - 2, HeadX, HeadY + 8);
    endShape(CLOSE);

    // Body
    fill(252, 219, 3); // CHANGE COLOUR HERE
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
      fill(255); // CHANGE COLOUR HERE
      stroke(40);
      ellipse(HeadX - 1.5, HeadY - 1, 11, 11);

      fill(40); // CHANGE COLOUR HERE
      ellipse(HeadX - 1.5, HeadY - 1, 3, 3);    
    }
    else {
      fill(255); // CHANGE COLOUR HERE
      stroke(40);
      ellipse(HeadX - 1.5, HeadY - 1, 11, 11);

      fill(40); // CHANGE COLOUR HERE
      ellipse(HeadX - 1.5, HeadY - 1, 6, 6);
    }

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
    strokeWeight(LineThickness + 2);
    stroke(217, 114, 4); // CHANGE COLOUR HERE
    line(HeadX + 20, HeadY + 52, HeadX + 14, HeadY + 58);
    line(HeadX + 20, HeadY + 52, HeadX + 18, HeadY + 60);
    line(HeadX + 10, HeadY + 50, HeadX + 4, HeadY + 56);
    line(HeadX + 10, HeadY + 50, HeadX + 8, HeadY + 58);

    // Cheek Feathers
    stroke(23, 164, 207); // CHANGE COLOUR HERE
    line(HeadX, HeadY + 10, HeadX + 1, HeadY + 13);
    line(HeadX + 5, HeadY + 8, HeadX + 6.5, HeadY + 10.5);
  }
}
