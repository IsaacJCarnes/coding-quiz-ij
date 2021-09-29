const heading = document.getElementById("titleQuestion"); //Page heading
const headingText = heading.textContent;
const description = document.getElementById("description")
const timer = document.getElementById("timer"); //Timer in top right
const answerArea = document.getElementById("answer"); //Multiple choice answer area
const startBtn = document.createElement("BUTTON"); //Start button at bottom of page
const resultsArea = document.getElementById("resultArea"); //Results display area
const wrongResult = document.getElementById("wrong"); //'wrong' text
const rightResult = document.getElementById("right"); //'right' text

const q1 = {question:"How do we search for an ID in Javascript?", answers: [".searchElementByID()", ".searchID()", ".getElementByID()", ".getID()"], isCorrect: [false, false, true, false]};
const q2 = {question:"Javascript is object oriented.", answers: ["True", "False"], isCorrect: [true, false]};
const q3 = {question:"To refer to a class you need to use ____", answers: ["#", ".", "$", "?"], isCorrect: [false, true, false, false]};
const q4 = {question:"To refer to an ID you need to use ____", answers: ["#", ".", "$", "?"], isCorrect: [true, false, false, false]};
const q5 = {question:"Javascript can not effect the styling of an element", answers: ["True", "False"], isCorrect: [false, true]};
let questionSet = [q1, q2, q3, q4, q5];
let usedQuestions = [];

var score = 0;
var questionsAnswered = 0;
var originalLength = questionSet.length;

//When button is clicked the proper elements are shown and others are hidden and the game is started
startBtn.addEventListener("click", function(){
  startBtn.style.display = "none";
  description.style.display = "none";
  answerArea.style.visibility = "visible";

  //Populates answer and question
  addAnswers();

  //Starts timer
  gameTimer();
});  

function startMenu(){ //Returns elements to their default state
  heading.textContent = headingText;
  startBtn.style.display = "flex";
  description.style.display = "flex";
  answerArea.style.visibility = "hidden";
}

//Replaces the title with the question and adds multiple choice options
function addAnswers(){
  //Prompts for random question, removes chosen question from question choices
  let tempNum = Math.floor(Math.random() * questionSet.length);
  let prompt = questionSet[tempNum]
  usedQuestions.push(questionSet[tempNum]);
  questionSet.splice(tempNum, 1);
  console.log(questionSet.length);

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

//Checks if clicked answer is correct
answerArea.onclick = function(event){
  var clicked = event.target;
  if(clicked.dataset.isCorrect != null){
    questionsAnswered++;
    if(clicked.dataset.isCorrect == "true"){
      score+=20;
      answerArea.innerHTML = "";
      flashResult(true);
    } else {
      score-=6;
      answerArea.innerHTML = "";
      flashResult(false);
    }

    if(questionSet.length == 0){ //Base case if user gets through all previous questions
      //NEED TO DISPLAY HIGH SCORES
    } else {
      addAnswers();
    }
  }
}

function flashResult(correct){ //Displays result for 2 seconds
  resultsArea.style.visibility = "visible";
  if(correct == true){
    rightResult.style.display = "inherit";
  } else {
    wrongResult.style.display = "inherit";
  }
  setTimeout(() => { resultsArea.style.visibility = "hidden"; rightResult.style.display = "none"; wrongResult.style.display = "none";}, 500);
}

function gameTimer() {
    var timeLimit = 75;
    timer.innerHTML = `${timeLimit} seconds`;
    var timeInterval = setInterval(function () {
      timeLimit--;
      
      timer.innerHTML = `${timeLimit} seconds`;
      if(timeLimit <= 0 || originalLength == questionsAnswered){
        clearInterval(timeInterval);
        answerArea.innerHTML = "";
        timer.innerHTML = `0 seconds`;
      }
    }, 1000);
}

startBtn.id = "startBtn";
startBtn.innerHTML = "Start Game";
document.body.appendChild(startBtn);