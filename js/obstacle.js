class Obstacle {
    ///DisplayAreaProp is an Array with coordinates [x,y],SizeProp is  an obstacle size;
    constructor(sizeProp,displayAreaProp,snakeProp) {
      this.size = sizeProp;
      this.displayArea=displayAreaProp;      
      this.coord=[];
      this.snake=snakeProp;
      this.obstacleArea=[];
      
    }
tobe(){
/////////////////

////////////////

  function detectColision(arr1,arr2){
    let len1=arr1.length;
    let len2=arr2.length;
    for(let i=0;i<len1;i++){
    for(let j=0;j<len2;j++){
          let a=JSON.stringify(arr1[i])
          let b=JSON.stringify(arr2[j])
          if (a==b){return true}
    }

    }
    return false;
}    

let x =Math.random()*(this.displayArea[0]);
let y= Math.random()*(this.displayArea[1]);
x=Math.round(x);
y=Math.round(y);
this.coord=[x,y]


if(detectColision(this.coord,snake.allSnake)){
  this.tobe
}else{

for(let i=1; i<this.size;i++){
     
  for(let j=0; j<this.size;j++){
        
        console.log("born")
  
        this.obstacleArea.push([this.coord[0]+i,this.coord[1]+j])
        
        }
  }
return [x,y]}
} 



renderit(){
     

    ctx.fillRect(this.coord[0], this.coord[1], this.size, this.size);


}


}