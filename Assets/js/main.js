const timer = document.getElementById("timer");
var startBtn = document.createElement("BUTTON");
startBtn.id = "startBtn";
startBtn.innerHTML = "Start Game";
document.body.appendChild(startBtn);

//var imgTag = document.createElement("img");

//imgTag.setAttribute("src", "Assets/images/hoopla-is-dead.png");
//imgTag.setAttribute("alt", "Start Test");

/*imgTag.addEventListener("click", function(){
    gameTimer();
});*/

startBtn.addEventListener("click", function(){
    gameTimer();
    startBtn.style.display = "none";
});

function gameTimer() {
    var timeLimit = 75;
  
    var timeInterval = setInterval(function () {
      timeLimit--;
      console.log(timeLimit);
      
      timer.innerHTML = `${timeLimit} seconds`;
      if(timeLimit <= 0){
        clearInterval(timeInterval);
      }
    }, 1000);
}