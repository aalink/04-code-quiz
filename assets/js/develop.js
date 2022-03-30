var count = 60;
//  Select increment and decrement button elements
var startButton = document.querySelector(".start-button");
var timerCountDown = document.querySelector(".timer-count");
var plusButton = document.querySelector("#add-point");
var subtractButton = document.querySelector("#subtract-point");
var currentQuestionIndex = 0;
var score = 0;
var scoreBox = document.querySelector(".timer-score-boxes");
var h3ToDisplayQuestion = document.querySelector("h3");
var ol = document.querySelector("#question-options");
var endOfQuiz = document.querySelector(".quiz-box");
var showWrongMessage = document.querySelector("#wrong-message");
var showCorrectMessage = document.querySelector("#correct-message");



function hideStartButton() {
  startButton.style.display = "none";
}

var question = [
  {
    questionTitle:
      "Which principle of software development is aimed at reducing repetition of software patterns?",
    choices: ["DRY", "AHA", "WET", "SRP"],
    answer: "DRY",
  },
  {
    questionTitle:
      "Which programming language refers to key/value pairs as a dictionary?",
    choices: ["JavaScript", "C++", "Java", "Python"],
    answer: "Python",
  },

  {
    questionTitle:
      "Which company develops the Compute Unified Device Architecture, also known as CUDA?",
    choices: ["Microsoft", "Nvidia", "Samsung", "Google"],
    answer: "Nvidia",
  },
  {
    questionTitle:
      "Which programming language isn't object oriented?",
    choices: ["C#", "Swift", "C", "Ruby"],
    answer: "C",
  },
  {
    questionTitle:
      "Which programming book was written by Andrew Hunt and David Thomas?",
    choices: ["Clean Code", "The Pragmatic Programmer", "Introduction to Algorithms", "Clean Architecture"],
    answer: "The Pragmatic Programmer",
  },
  {
    questionTitle:
      "Which company is known for designing the M1 processor?",
    choices: ["Intel", "Apple", "AMD", "ARM"],
    answer: "The Pragmatic Programmer",
  },
];

function displayQuestion(index) {
  ol.innerHTML = "";
  h3ToDisplayQuestion.innerHTML = "";
  h3ToDisplayQuestion.append(question[index].questionTitle);
  console.log(question[index].questionTitle);
  for (let i = 0; i < 4; i++) {
    var li = document.createElement("li");
    var questionsToInterate = question[index].choices[i];
    li.textContent = questionsToInterate;
    ol.append(li);
    li.onclick = registerChoiceClick;
    // li.attributes;
    console.log(question[0].choices[i]);
    // li.addEventListener
  }
}

function registerChoiceClick() {
  console.log("working");
  userChoice = this.textContent;
  console.log(userChoice);
  if (userChoice === question[currentQuestionIndex].answer) {
    showCorrectMessage.classList.remove("hide");
    setTimeout(function () {
      showCorrectMessage.classList.add("hide");
    }, 1000);
    console.log("CORRECT");
  } else {
    //create HTML element that appears and states it's WRONG
    // keep it hidden until it's clicked wrong
    showWrongMessage.classList.remove("hide");
    setTimeout(function () {
      showWrongMessage.classList.add("hide");
    }, 1000);
    console.log("WRONG");
    count -= 10;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex === question.length) {
    setTimeout(function () {
      endQuiz();
    }, 1500);
  } else {
    setTimeout(function () {
      displayQuestion(currentQuestionIndex);
    }, 1500);
  }
}

function endQuiz() {
  endOfQuiz.setAttribute("class", "hide");
}


startButton.addEventListener("click", function () {
  displayQuestion(currentQuestionIndex);
  timerCountDown.textContent = count;
  var timeInterval = setInterval(function () {
    count--;
    if (count >= 0) {
      timerCountDown.textContent = count;
      console.log(count);
    } else {
      clearInterval(timeInterval);
      count = 10;
    }
  }, 1000);
});
