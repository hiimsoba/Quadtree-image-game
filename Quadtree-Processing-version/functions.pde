color getColor(float x, float y) {
  x = floor(x) + width / 2 ;
  y = floor(y) + height / 2 ;
  int i = int(y * img.width + x) ;
  return img.pixels[i] ;
}

boolean isInside(float x, float y, quadtree obj) {
  return (
    x >= width / 2 + obj.x - obj.w / 2 && x <= width / 2 + obj.x + obj.w / 2 &&
    y >= height / 2 + obj.y - obj.h / 2 && y <= height / 2 + obj.y + obj.h / 2
  ) ;
}