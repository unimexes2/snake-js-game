class Snake {
      constructor(sizeProp, ctxProp,arrProp,dirProp,dispSizeProp) {
         
        this.size = sizeProp;
        this.ctx=ctxProp;
        this.allSnake=arrProp;
        this.directionXY=dirProp;
        this.dispSize=dispSizeProp;
        this.collDetect;      
        this.stepsDid=0;
        this.nopause=true;
        this.scoreNumber=0;
        ///control state valuable 
       /// this.progState=false;
      }

renderit(){

      ctx.clearRect(0, 0, canvas.width, canvas.height); 
         
      this.allSnake.forEach((val,index)=>{
     if(index==this.allSnake.length-1){
      ctx.fillStyle = 'blue';
      ctx.strokeStyle = 'black';
      ctx.strokeRect(val[0], val[1], this.size, this.size); 
      ctx.fillRect(val[0], val[1], this.size, this.size);
      //head
      ctx.arc(val[0]+this.size/2, val[1]+this.size/2, this.size/2, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';

      ctx.fill();
      
      


      }else{
      ctx.fillStyle = 'blue';
      ctx.strokeStyle = 'black';
      ctx.strokeRect(val[0], val[1], this.size, this.size); 
      ctx.fillRect(val[0], val[1], this.size, this.size);}
}      


      )
      obstacle.renderit();
      if(this.stepsDid>0){
      this.scoreNumber=  parseInt(this.stepsDid*20+this.allSnake.length*25);    
      score.innerHTML=this.scoreNumber;};

}

////Direction change
changeDirection(dir){
     let dim= this.size;
      
     
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
      ///pause function check
      debugger
      
if(this.nopause){
let snLength=this.allSnake.length
let step=this.allSnake[snLength-1]
let dirx;
let diry;
let nextStep =[step[0]+this.directionXY[0], step[1]+this.directionXY[1]]
let splice=true;
///counter starts
///(this.allSnake[0]>1||this.allSnake[1]>1)?this.progState=true:"";
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
       this.stepsDid=1;
       console.log("siiii growwwwww")
       this.allSnake.push(nextStep);    
       splice=false ;     
       obstacle.coord=obstacle.tobe()
  
 }



////collision is only possible then the  snake has more then 4 elements 
 let col=[...this.allSnake]
if(col.length>4){

   col.splice(col.length-3)
   
   if(this.collDetect(col,[nextStep])){

      console.log("choke",)
      
      this.dead();
}}

///the step

this.allSnake.push (nextStep);
this.stepsDid*=1.015;
this.allSnake.shift(0,step);

}}
dead(){
      
      this.stepsDid=0;
      clearInterval(setrender);
      clearInterval(setmovie);
      setspeed=0;
     if(this.dispSize[0]>150){
      
      
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font='bold 30px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText("GAME OVER",this.dispSize[0]/2-100, this.dispSize[1]/2-60);
      ctx.fillText("YOUR SCORE IS "+this.scoreNumber,this.dispSize[0]/2-150, this.dispSize[1]/2);     
      //this.scoreNumber=0;

     // score.innerHTML=this.scoreNumber;
}else{

  alert("Game Over!")
     }

}
born(){
console.log("I am alive")

}





}