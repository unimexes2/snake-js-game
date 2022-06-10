class Snake {
      constructor(sizeProp, ctxProp,arrProp,dirProp,dispSizeProp) {
         
        this.size = sizeProp;
        this.ctx=ctxProp;
        this.allSnake=arrProp;
        this.directionXY=dirProp;
        this.dispSize=dispSizeProp;
      }





renderit(){
// console.log(this.allSnake,this.size,this.directionXY)
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
      this.allSnake.forEach((val)=>{
      ctx.fillRect(val[0], val[1], this.size, this.size); 
      obstacle.renderit();
})}



////Direction change
changeDirection(dir){
debugger
      switch (dir)
      
      {
      case "right":
      this.directionXY[0]>=0?this.directionXY.splice(0,2,this.size,0):"";
      break
      case "left":
      this.directionXY[0]<=0?this.directionXY.splice(0,2,-this.size,0):"";
      break
      case "up":
      this.directionXY[1]>=0?this.directionXY.splice(0,2,0,-this.size):"";
      break
      case "down":
      this.directionXY[1]>=0?this.directionXY.splice(0,2,0,this.size):"";
      break      

}
//this.direction=dir;
}

moove(){
let snLength=this.allSnake.length
let step=this.allSnake[snLength-1]
let nextStep =[step[0]+this.directionXY[0], step[1]+this.directionXY[1]]
debugger


///wall detect

if(nextStep[0]>=this.dispSize[0]||nextStep[0]<0||nextStep[1]>=this.dispSize[1]||nextStep[1]<0)
{this.dead();
      


}



////set  colission area

let colissionArr=[];
for(let i=1; i<this.size;i++){
      for(let j=0; j<this.size;j++){
            colissionArr.push([nextStep[0]+i,nextStep[1]+j])
            //colissionArr.push([nextStep[0]-i,nextStep[1]-j])
            }
} 
debugger
try {
let myVal=false;

////check colision with itself
debugger
let snakeLength=this.allSnake.length;
let lengthCol=colissionArr.length;


for (let j=0;j<snakeLength; j++){
      debugger
      for (let i=0;i<lengthCol;i++){

            let a=JSON.stringify(colissionArr[j])
            let b=JSON.stringify(this.allSnake[i])
          
                if (JSON.stringify(colissionArr[i])==JSON.stringify(this.allSnake[i])){
                      console.log("UUUUPS")
                     // this.dead()       
                  }
          
      }
      
      
}


////fooood detect

for (let i=0;i<lengthCol;i++){

  let a=colissionArr[i];
  let b=[obstacle.coord[0]+this.size/2,obstacle.coord[1]+this.size/2]

      if (JSON.stringify(a)==JSON.stringify(b)){
            this.allSnake.push (nextStep);
            console.log("growww")
            ////new obstacle
            obstacle.tobe();
        }

}}      
    catch(err) {
      
    }
///the step
this.allSnake.push (nextStep);
this.allSnake.shift();


}



dead(){
      clearInterval(setrender);
      clearInterval(setmovie);
      
      alert("Game Over!")
////need to write return to initial state
}


}