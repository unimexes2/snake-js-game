class Obstacle {
    ///DisplayAreaProp is an Array with coordinates [x,y],SizeProp is  an obstacle size;
    constructor(sizeProp,displayAreaProp,snakeProp) {
      this.size = sizeProp;
      this.displayArea=displayAreaProp;      
      this.coord=[];
      this.snake=snakeProp;
      
    }
tobe(){
let x =Math.random()*(this.displayArea[0]);
let y= Math.random()*(this.displayArea[1]);
x=Math.round(x);
y=Math.round(y);

if (this.snake.includes([x,y])){this.tobe()}
this.coord=[x,y]
return [x,y]
} 

renderit(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height); 

    ctx.fillRect(this.coord[0], this.coord[1], this.size, this.size); 

}


}