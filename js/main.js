///canvas
var can = document.getElementById('canvas');
//can.height = 1000; can.width = 1300;

var ctx = can.getContext('2d');
var x = 10, y = 100, dir=[];
ctx.fillStyle = "black";




function logKey(e){

let result
   switch (e.key) {
   
   case "ArrowUp":
        result="up";
        break
   case "ArrowLeft":
        result="left";
        break
   case  "ArrowRight":
         result="right"
         break
   case "ArrowDown":
         result="down"
         break
   }
//console.log(result)
snake.changeDirection(result);
}
/////Events
document.addEventListener("keydown", logKey);

//window.addEventListener("load", initState);

let snake =new Snake(10,ctx,[[0,0]],[0,0]);

let setmovie=setInterval(()=>{snake.moove()},100);

let setrender=setInterval(()=>{snake.renderit()},100);
