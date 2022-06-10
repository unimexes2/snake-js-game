///canvas
var can = document.getElementById('canvas');
const dispalyRes=[500,500]

can.height = dispalyRes[0]; can.width = dispalyRes[1];
var ctx = can.getContext('2d');
var x = 10, y = 100, dir=[],direction="";
ctx.fillStyle = "black";




function logKey(e){
   console.log(e.key,direction)

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
   }
snake.changeDirection(direction);
}


/////Events
document.addEventListener("keydown", logKey);

//window.addEventListener("load", initState);
//Snake DIM,CTX,Init pocition(xy,)(should be >0),Direction of mooving(x,y)
let snake =new Snake(20,ctx,[[1,1]],[0,0],dispalyRes);

let setmovie=setInterval(()=>{snake.moove()},400);

let setrender=setInterval(()=>{snake.renderit()},100);


let obstacle= new Obstacle(20,[500,500],snake.allSnake);


obstacle.tobe();

//obstacle.renderit();



//let setrenderObs=setInterval(()=>{obstacle.renderit()},5);


