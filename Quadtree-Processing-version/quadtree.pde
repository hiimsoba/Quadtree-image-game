class quadtree {
  
  float x ;
  float y ;
  float w ;
  float h ;
  color cl ;
  boolean subdivided = false ;
  quadtree topleft ;
  quadtree topright ;
  quadtree bottomleft ;
  quadtree bottomright ;
  
  quadtree(float x_, float y_, float w_, float h_, color cl_) {
    x = x_ ;
    y = y_ ;
    w = w_ ;
    h = h_ ;
    cl = cl_ ;
  }
  
  void show() {
    if(subdivided) {
      topleft.show() ;
      topright.show() ;
      bottomleft.show() ;
      bottomright.show() ;
    } else {
      fill(cl) ;
      noStroke() ;
      pushMatrix() ;
      translate(width / 2, height / 2) ;
      rectMode(CENTER) ;
      rect(x, y, w, h) ;
      popMatrix() ;
    }
  }
  
  boolean subdivide() {
    if(w < 1 || h < 1) {
      return false ; 
    }
    if(!subdivided) {
      subdivided = true ;
      topleft = new quadtree(x - w / 4, y - w / 4, w / 2, h / 2, getColor(x - w / 4, y - w / 4)) ;
      topright = new quadtree(x + w / 4, y - h / 4, w / 2, h / 2, getColor(x + w / 4, y - w / 4)) ;
      bottomleft = new quadtree(x - w / 4, y + h / 4, w / 2, h / 2, getColor(x - w / 4, y + w / 4)) ;
      bottomright = new quadtree(x + w / 4, y + h / 4, w / 2, h / 2, getColor(x + w / 4, y + w / 4)) ;
      show() ;
      return true ;
    } else {
      boolean divided = false ;
      if(isInside(mouseX, mouseY, topleft)) {
        divided = topleft.subdivide() ;
      }
      if(!divided) {
        if(isInside(mouseX, mouseY, topright)) {
          divided = topright.subdivide() ;
        }
      }
      if(!divided) {
        if(isInside(mouseX, mouseY, bottomleft)) {
          divided = bottomleft.subdivide() ;
        }
      }
      if(!divided) {
        if(isInside(mouseX, mouseY, bottomright)) {
          divided = bottomright.subdivide() ;
        }
      }
      return true ;
    }
  }
  
  
}