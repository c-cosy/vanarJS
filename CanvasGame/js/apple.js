// module of the apple component!!
;
(function() {
  class Apple {
    constructor(row, col, url, points) {
      this.row = row;
      this.col = col;
      this.url = url;
      this.points = points;
    }
    //drows the element
    render() {
      // console.log( this );
      var image = new Image();
      var this_apple = this;
      image.onload = function() {
        gameScreen.drawImage(image, this_apple.col * step_grid, this_apple.row * step_grid);
      }
      image.src = this.url;
    }
  }
  window.Apple = Apple;
})();
