PImage img ;
quadtree tree ;

void setup() {
  size(600, 600) ;
  img = loadImage("image.jpg") ;
  img.resize(width, height) ;
  img.loadPixels() ;
  tree = new quadtree(0, 0, width, height, getColor(0, 0)) ;
  tree.show() ;
}