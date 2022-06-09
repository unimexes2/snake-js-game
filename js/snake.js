class Snake {
      constructor(sizeProp, ctxProp,arrProp,dirProp,) {
         
        this.size = sizeProp;
        this.ctx=ctxProp;
        this.allSnake=arrProp;
        this.directionXY=dirProp;
        this.direction="";
      }





renderit(){
      console.log(this.allSnake,this.size,this.directionXY)
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
      this.allSnake.forEach((val)=>{
      ctx.fillRect(val[0], val[1], this.size, this.size); 
//console.log(this.allSnake)      
})}

changeDirection(dir){
debugger
      switch (dir)
      {
      case "right":
      this.direction!=="left"?this.directionXY.splice(0,2,this.size,0):"";
      break
      case "left":
      this.direction!=="right"?this.directionXY.splice(0,2,-this.size,0):"";
      break
      case "up":
      this.direction!=="down"?this.directionXY.splice(0,2,0,-this.size):"";
      break
      case "down":
      this.direction!=="up"?this.directionXY.splice(0,2,0,this.size):"";
      break      


}
this.direction=dir;
}

moove(){
console.log(this.allSnake,this.size,this.directionXY)
debugger
let snLength=this.allSnake.length
let step=this.allSnake[snLength-1]
this.allSnake.push ([step[0]+this.directionXY[0], step[1]+this.directionXY[1]]);

this.allSnake.shift();
}

grow(){
let step=this.allSnake[length-1]
step=[step[0]+this.directionXY[0], step[1]+this.directionXY[1]];
this.allSnake.push(step);
}

born(){
this.allSnake.push([0,0])
this.directionXY=[0,0]
}




}

//// functions of snake;
