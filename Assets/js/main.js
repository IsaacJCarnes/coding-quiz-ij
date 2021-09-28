const heading = document.getElementById("titleQuestion");
const headingText = heading.innerHTML;

const description = document.getElementById("description")
const timer = document.getElementById("timer");
const answerArea = document.getElementById("answer");
var startBtn = document.createElement("BUTTON");

const q1 = {question:"How do we search for an ID in Javascript?", answers: [".searchElementByID()", ".searchID()", ".getElementByID()", ".getID()"], isCorrect: [false, false, true, false]};
/*const q2 = {question:"", answers: ["", "", ""]};
const q3 = {question:"", answers: ["", "", ""]};
const q4 = {question:"", answers: ["", "", ""]};
const q5 = {question:"", answers: ["", "", ""]};*/

//var imgTag = document.createElement("img");

//imgTag.setAttribute("src", "Assets/images/hoopla-is-dead.png");
//imgTag.setAttribute("alt", "Start Test");


startBtn.addEventListener("click", function(){
  startBtn.style.display = "none";
  description.style.display = "none";
  answerArea.style.visibility = "visible";
  addAnswers(q1);
  gameTimer();
});  

function addAnswers(prompt){
  heading.innerHTML = prompt.question;
  for(i = 0; i < prompt.answers.length; i++){
    var li = document.createElement('li');
    var text = document.createTextNode(prompt.answers[i]);

    if(prompt.isCorrect[i]){
      li.dataset.isCorrect = true;
    } else {
      li.dataset.isCorrect = false;
    }

    li.appendChild(text);
    answerArea.appendChild(li);
  }
}

function gameTimer() {
    var timeLimit = 75;
  
    var timeInterval = setInterval(function () {
      timeLimit--;
      
      timer.innerHTML = `${timeLimit} seconds`;
      if(timeLimit <= 0){
        clearInterval(timeInterval);
      }
    }, 1000);
}

startBtn.id = "startBtn";
startBtn.innerHTML = "Start Game";
document.body.appendChild(startBtn);