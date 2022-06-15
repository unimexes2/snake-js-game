class Obstacle {
  ///DisplayAreaProp is an Array with coordinates [x,y],SizeProp is  an obstacle size;
  constructor(sizeProp, displayAreaProp, snakeProp) {
    this.size = sizeProp;
    this.displayArea = displayAreaProp;
    this.coord = [];
    this.snake = snakeProp;
    this.obstacleArea = [];

  }
  tobe() {

//////colision detect prevent to obstacle appear in  a Snake area
    function detectColision(arr1, arr2) {
      let len1 = arr1.length;
      let len2 = arr2.length;
      for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
          let a = JSON.stringify(arr1[i])
          let b = JSON.stringify(arr2[j])
          if (a == b) { return true }
        }

      }
      return false;
    }

    /////born of new obstacle

    let netValueX = (this.displayArea[0] - this.size) / this.size
    let x = Math.random() * netValueX;
    x = Math.round(x) * this.size + 1;


    let netValueY = (this.displayArea[1] - this.size) / this.size
    let y = Math.random() * netValueY;
    y = Math.round(y) * this.size + 1;
    this.coord = [x, y]

    if (detectColision(this.coord, snake.allSnake)) {

      this.tobe
    } else {
      return [x, y]
    }
  }


/////render  obstacle.

  renderit() {
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    const centerX = this.coord[0] + this.size / 2;
    const centerY = this.coord[1] + this.size / 2;
    const radius = this.size / 2;

    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.lineWidth = 2;
    1
    ctx.strokeStyle = '#003300';
    ctx.stroke();



  }


}