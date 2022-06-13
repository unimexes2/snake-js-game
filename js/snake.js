class Snake {
      constructor(sizeProp, ctxProp,arrProp,dirProp,dispSizeProp) {
         
        this.size = sizeProp;
        this.ctx=ctxProp;
        this.allSnake=arrProp;
        this.directionXY=dirProp;
        this.dispSize=dispSizeProp;
        this.collDetect;      
        this.stepsDid=0;
      }

renderit(){

      ctx.clearRect(0, 0, canvas.width, canvas.height); 
          
      ctx.fillStyle = 'blue';
      ctx.strokeStyle = 'black';

     
     
     
      this.allSnake.forEach((val,index)=>{
/*      if(index==0){
            ctx.arc(val[0], val[1], this.size, 0, 2 * Math.PI);
            ctx.stroke();

      }*/
      ctx.strokeRect(val[0], val[1], this.size, this.size); 
      ctx.fillRect(val[0], val[1], this.size, this.size);
}      


      )
      obstacle.renderit();
      if(this.stepsDid>0){score.innerHTML=parseInt(this.stepsDid*20+this.allSnake.length*25)};

}

////Direction change
changeDirection(dir){
     let dim= this.size;
      this.stepsDid=1;
     
      switch (dir)
      
      {
      case "right":
      if (this.directionXY[0]===0){this.directionXY.splice(0,2,dim,0)};
      break
      case "left":
      if(this.directionXY[0]===0){this.directionXY.splice(0,2,(-dim),0)};
      break
      case "up":
      if(this.directionXY[1]===0){this.directionXY.splice(0,2,0,(-dim))};
      break
      case "down":
      if (this.directionXY[1]===0){this.directionXY.splice(0,2,0,dim)};
      break      

}

}


moove(){

let snLength=this.allSnake.length
let step=this.allSnake[snLength-1]
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


///Check colission function

this.collDetect=   function detectColision(arr1,arr2){
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
      

if(this.collDetect(obstacle.snake,[obstacle.coord])){
   
       console.log("siiii growwwwww")
       this.allSnake.push(nextStep);    
       splice=false ;     
       obstacle.coord=obstacle.tobe()
  
 }

 ////check11 colision

////collision is only possible then the  snake has more then 4 elements 
 let col=[...this.allSnake]
if(col.length>4){

   col.splice(col.length-4)
   
   if(this.collDetect(col,[nextStep])){

      console.log("choke",)
      
      this.dead();
}}

///the step
this.allSnake.push (nextStep);
this.stepsDid*=1.015;
this.allSnake.shift(0,step);

}
dead(){debugger
      clearInterval(setrender);
      clearInterval(setmovie);
      alert("Game Over!")
////need to write return to initial state
}
born(){
console.log("I am alive")

}





}