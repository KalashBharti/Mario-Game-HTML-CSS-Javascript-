
score=0;
cross=true;
audio=new Audio('backgroundMusic.mp3');
audioOver= new Audio('gameOverMusic.mp3');
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function(e){
 
    
    if (e.keyCode==38 || e.keyCode==32)
    {
        mario=document.querySelector('.mario');
        mario.classList.add('animateMario');
        setTimeout(()=>{
            mario.classList.remove('animateMario')

        },700);
    }
     if (e.keyCode==39)
    {
        mario=document.querySelector('.mario');
        marioL=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left=marioL+50+"px";
    }
    if (e.keyCode==37)
    {
        mario=document.querySelector('.mario');
        marioL=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left=marioL-50+"px";
    }
}

setInterval(() => {
    mario= document.querySelector('.mario');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    
    Ml=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
    Mt=parseInt(window.getComputedStyle(mario,null).getPropertyValue('top'));
    ol=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    ot=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(Ml-ol);
    offsetY=Math.abs(Mt-ot);
    
    if(offsetX< 50 && offsetY<70){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAnim')
        audio.pause();
        audioOver.play();
       
    }
    else if (offsetX<25 &&cross){
       score+=1;
      updateScore(score);
    console.log(score);
    cross=false;
    setTimeout(() => {
        cross=true;
    }, 1000);
    setTimeout(() => {
        animDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur= animDur-0.05;
        obstacle.style.animationDuration= newDur + "s";
 
    }, 500);
       
    }

}, 100);

function updateScore(score){
    scoreC.innerHTML="Your score: " + score
}