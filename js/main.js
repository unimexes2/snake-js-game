var snake=[[0,0]];

///canvas
var can = document.getElementById('canvas');
//can.height = 1000; can.width = 1300;

var ctx = can.getContext('2d');
var x = 10, y = 100, dir=[];
ctx.fillStyle = "black";



function loadSnake(){
let len=snake.length-1
  
 let coordToDraw=snake[len]
  ctx.fillRect((coordToDraw[0]+dir[0]), (coordToDraw[1]+dir[1]), 5, 5); 
  snake.push([coordToDraw[0]+dir[0], coordToDraw[1]+dir[1]]);
  setInterval(loadSnake, 2000);
  
  
  
  }







function initState(){
  ctx.fillRect(0, 0, 5, 5);
  dir=[1,0]
  loadSnake();

}






document.addEventListener("keydown", logKey);

window.addEventListener("load", initState);



///key logger 
function logKey (e){
  debugger
  e.preventDefault();
  snakeChange(e.key);
 
};