
const foodIncrease=()=>{

    let x=Math.random()*1000;
    let y=Math.random()*1000;
   
     if( snake.includes([x,y])&&snake.length<10000 )
     {foodIncrease;}
   
     return [x,y]
   
   }