let popped = 0;
let boom = 0;
     var audio = new Audio('sound/gamesound.mp3');
     
     var play = document.querySelector("#play");
       play.addEventListener('click', function(){
        
          audio.play();
          audio.loop = true;
      });

       var pause = document.querySelector("#pause");
       pause.addEventListener('click', function(){

          audio.pause();
      });

   
// document.addEventListener('mouseover', function(e){
    document.addEventListener('click', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
               var audio = new Audio('sound/pop.wav');
               audio.play();
              document.getElementById("score").innerHTML ++;
             
                // removeEvent(e);
                checkAllPopped();
    }else if (e.target.className === "boom"){
         e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "Boom!";
                boom++;
                popped--;
               var audio = new Audio('sound/boom.wav');
               audio.play();
              document.getElementById("score").innerHTML --;
               checkAllPopped();
    }
});

// function removeEvent(e){
//     e.target.removeEventListener('click', function(){
        
//     })
// };

let tryAgain = document.querySelector('#tryAgain');
tryAgain.addEventListener('click', function(){
    window.location.reload();
})



  let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        let hints = document.querySelector('#hints');
        let time = 20;
let timeDisplay = document.querySelector('#time');
const timeInterval = setInterval(updateTime, 1000);


function checkAllPopped(){
  

    if (popped === 10){
        console.log('all popped!');
        var win = new Audio('sound/winner.wav');
        win.play();
         gallery.innerHTML = '';
        tryAgain.style.display = 'inline-block';
        message.style.display = 'block';
        play.style.display = "none";
        pause.style.display = "none";
        audio.pause();
        clearTimeout(timeInterval);

    }else if (boom >= 2){
        var lose = new Audio('sound/loser.wav');
        lose.play();
        message.innerHTML = "Oops ! Try Again";
         gallery.innerHTML = '';
        tryAgain.style.display = 'inline-block';
        message.style.display = 'block';
        play.style.display = "none";
        pause.style.display = "none";
        audio.pause();
        hints.style.display = "block";
        clearTimeout(timeInterval);
    }
};


function updateTime() {
  time--;
  timeDisplay.innerHTML = time + 's';

  if (time === 0) {
    clearTimeout(timeInterval);
    // end game
    gameOver();
  }
}

function gameOver() {
   var lose = new Audio('sound/loser.wav');
        lose.play();
        message.innerHTML = "Oops Time ran out ! Try Again";
        gallery.innerHTML = '';
        tryAgain.style.display = 'inline-block';
        message.style.display = 'block';
        play.style.display = "none";
        pause.style.display = "none";
        audio.pause();
        hints.style.display = "block";
}