///canvas
var can = document.getElementById('canvas');
var dispalyRes=[760,760]
var ctx;
var direction="";
var snake;
var obstacle;
var blockSize=40;
var setmovie;
var setrender;
var setspeed=400;
let progState=true;
let eventTime=0;
///logger

snake=new Snake(blockSize,ctx,[[1,1]],[0,0],dispalyRes);
    snake.born();


function logKey(e){
  // console.log(e.key,direction)
debugger
   switch (e.key) {
   
   case "ArrowUp":
        direction="up";
        break
   case "ArrowLeft":
        direction="left";
        break
   case  "ArrowRight":
         direction="right"
         break
   case "ArrowDown":
         direction="down"
         break

case " ":
 pauseGame()
;}
  if(e.timeStamp-eventTime>300){
   snake.changeDirection(direction);
   eventTime=e.timeStamp;
  }
  }
function pauseGame(){
if (snake.nopause){
  snake.nopause=false
 
} else{  snake.nopause=true;}
}
/////Events
document.addEventListener("keydown", logKey);
document.querySelector("#screen-size").addEventListener("change", changeDispParam);
document.querySelector("#snake-size").addEventListener("change", changeSnakeParam);
document.querySelector("#speed").addEventListener("change", changeSpeedParam);

///event functions
function changeDispParam(e){

console.log("paramchange",e.currentTarget.value)
////clean all the valuables 
dispalyRes.splice(0);
dispalyRes.push(parseInt(e.currentTarget.value))
dispalyRes.push(parseInt(e.currentTarget.value))

}
function changeSnakeParam(e){

  blockSize=parseInt(e.currentTarget.value);      
  
  }
function changeSpeedParam(e){

setspeed=parseInt(e.currentTarget.value);      




  }

function reset1(){

location.reload();
}

function paramChange(){
if (progState){progState=false;
clearInterval(setrender);
clearInterval(setmovie);
setTimeout( startGame(),1000);
 } }

//Snake DIM,CTX,Init pocition(xy,)(should be >0),Direction of mooving(x,y)
function startGame(){
    can.height = dispalyRes[0]; can.width = dispalyRes[1];
    ctx= can.getContext('2d');
    
    snake=new Snake(blockSize,ctx,[[1,1]],[0,0],dispalyRes);
    snake.born();
    
    setmovie=setInterval(()=>{snake.moove()},setspeed);
    setrender=setInterval(()=>{snake.renderit()},10);
    
    obstacle= new Obstacle(blockSize,dispalyRes,snake.allSnake);
    obstacle.tobe();
};
let score=document.querySelector("#score")
//startGame();




