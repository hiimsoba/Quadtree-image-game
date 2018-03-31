function setup() {
  createCanvas(800, 800) ;
  background(0) ;
  img.resize(800, 800) ;
  img.loadPixels() ;
  tree = new rectangle(0, 0, 800, 800, getColor(0, 0)) ;
  tree.show() ;
}

let tree ;

//let imgurl = "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/koala-closeup-tree.adapt.945.1.jpg" ;
let imgurl = "https://i.imgur.com/BrKGzwu.jpg" ;
let img ;

function preload() {
  img = loadImage(imgurl) ;
}

function isInside(x, y, obj) {
  return (
    x >= width / 2 + obj.x - obj.w / 2 && x <= width / 2 + obj.x + obj.w / 2 &&
    y >= height / 2 + obj.y - obj.h / 2 && y <= height / 2 + obj.y + obj.h / 2
  ) ;
}

function draw() {
  if(mouseIsPressed) {
    tree.subdivide() ;
    //tree.show() ;
  }
}
