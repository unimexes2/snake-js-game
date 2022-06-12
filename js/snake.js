class Snake {
      constructor(sizeProp, ctxProp,arrProp,dirProp,dispSizeProp,allSnakeCollisionProp) {
         
        this.size = sizeProp;
        this.ctx=ctxProp;
        this.allSnake=arrProp;
        this.directionXY=dirProp;
        this.dispSize=dispSizeProp;
        this.allSnakeCollision=allSnakeCollisionProp;

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
let stepBefore=this.allSnake[snLength-2]
let dirx;
let diry;
let nextStep =[step[0]+this.directionXY[0], step[1]+this.directionXY[1]]
let splice=true;

///////////direction setup
this.directionXY[0]>=0?dirx=1:dirx=-1;
this.directionXY[1]>=0?diry=1:diry=-1;
///wall detect

if(nextStep[0]>=this.dispSize[0]||nextStep[0]<0||nextStep[1]>=this.dispSize[1]||nextStep[1]<0)
{this.dead()}

///form all Snake
////set colission area

if (this.directionXY[0]+this.directionXY[1]!=0){

      if(step>2){
let elFour=this.allSnake[step-2]

let q=[elFour[0], elFour[1]]
let w=[elFour[0], elFour[1]-this.size];
let e=[elFour[0]-this.size, elFour[1]-this.size];
let r=[elFour[0]-this.size,elFour[1]];

      }
             
             

            
      
///Check colission function

function detectColision(arr1,arr2){
      let len1=arr1.length;
      let len2=arr2.length;
      for(let i=0;i<len1;i++){
            let a=JSON.stringify(arr1[i])
            for(let j=0;j<len2;j++){
            
            let b=JSON.stringify(arr2[j])
                     
            if (a==b){return true}
      }
  
      }
      return false;
}    
      
if(detectColision([step],obstacle.obstacleArea)){
   
      // console.log("siiii growwwwww")
       this.allSnake.push(nextStep);    
       splice=false ;     
   
 }
 

////check colision
let col=[...this.allSnake]
if(col.length>3){
col.splice(col.length-3)
if(detectColision(col,[nextStep])){

      debugger
      console.log("choke",)
      console.log("collision",this.allSnakeCollision,"step is",nextStep)

       this.dead();
}}

///the step
this.allSnake.push (nextStep);
this.allSnake.shift(0,step);
//this.allSnakeCollision.push(q,w,e,r);}

//splice?this.allSnakeCollision.splice(0,4):""
}}



dead(){
      clearInterval(setrender);
      clearInterval(setmovie);
      
      alert("Game Over!")
////need to write return to initial state
}


born(){


}



}