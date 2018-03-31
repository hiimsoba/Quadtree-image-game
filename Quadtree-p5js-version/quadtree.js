function rectangle(x, y, w, h, cl) {
  this.x = x ;
  this.y = y ;
  this.w = w ;
  this.h = h ;
  this.subdivided = false ;
  this.col = cl ;

  this.show = function() {
    if(this.subdivided) {
      this.topleft.show() ;
      this.topright.show() ;
      this.bottomleft.show() ;
      this.bottomright.show() ;
    } else {
      fill(this.col) ;
      noStroke() ;
      push() ;
      translate(width / 2, height / 2) ;
      rectMode(CENTER) ;
      rect(this.x, this.y, this.w, this.h) ;
      pop() ;
    }
  }

  this.subdivide = function() {
    if(this.w < 1 || this.h < 1) {
      return ;
    }
    if(!this.subdivided) {
      this.subdivided = true ;
      this.topleft = new rectangle(this.x - this.w / 4, this.y - this.w / 4, this.w / 2, this.h / 2, getColor(this.x - this.w / 4, this.y - this.w / 4)) ;
      this.topright = new rectangle(this.x + this.w / 4, this.y - this.h / 4, this.w / 2, this.h / 2, getColor(this.x + this.w / 4, this.y - this.w / 4)) ;
      this.bottomleft = new rectangle(this.x - this.w / 4, this.y + this.h / 4, this.w / 2, this.h / 2, getColor(this.x - this.w / 4, this.y + this.w / 4)) ;
      this.bottomright = new rectangle(this.x + this.w / 4, this.y + this.h / 4, this.w / 2, this.h / 2, getColor(this.x + this.w / 4, this.y + this.w / 4)) ;
      this.show() ;
      return true ;
    } else {
      let divided = false ;
      if(isInside(mouseX, mouseY, this.topleft)) {
        divided = this.topleft.subdivide() ;
      }
      if(!divided) {
        if(isInside(mouseX, mouseY, this.topright)) {
          divided = this.topright.subdivide() ;
        }
      }
      if(!divided) {
        if(isInside(mouseX, mouseY, this.bottomleft)) {
          divided = this.bottomleft.subdivide() ;
        }
      }
      if(!divided) {
        if(isInside(mouseX, mouseY, this.bottomright)) {
          divided = this.bottomright.subdivide() ;
        }
      }
    }
  }
}

function getColor(x, y) {
  x = floor(x) + width / 2 ;
  y = floor(y) + height / 2 ;
  let i = y * img.width + x ;
  i *= 4 ;
  return color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]) ;
}
