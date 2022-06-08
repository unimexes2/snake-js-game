let snake=[];


//// functions of snake;

const snakeGrow=(x,y)=>{snake.push([x],[y]);};

const snakeMouve=(x,y)=>{snake.shift([x],[y])
snake.pop()};

function snakeChange(e){

   switch (e.key) {
   
   case "ArrowUp":
        y++;

   case "ArrowLeft":
        x--;
   case  "ArrowRight":
         x++
   case "ArrowDown":
         y--
   case " ":

   pause();
       



}
}