var count = 10;
//  Select increment and decrement button elements
var startButton = document.querySelector(".start-button");
var timerCountDown = document.querySelector(".timer-count");
var currentQuestionIndex = 0;

var question1 = [
  {
    questionTitle:
      "Which principle of software development is aimed at reducing repetition of software patterns?",
    choices: ["DRY", "AHA", "WET", "SRP"],
    answer: "DRY",
  },
];

var question2 = [
  {
    questionTitle:
    "Which programming language refers to key/value pairs as a dictionary?",
    choices: ["JavaScript", "C++", "Java", "Python"],
    answer: "Python",
  },
];

var question3 = [
  {
    questionTitle:
    "Which company develops the Compute Unified Device Architecture, also known as CUDA?",
    choices: ["Microsoft", "Nvidia", "Samsung", "Google"],
    answer: "Nvidia",
  },
];

function displayOnPage() {
  var currentQuestion = question1[currentQuestionIndex];
  var questionTitleElement = document.querySelector("#question-ID");
  var choiceElement1 = document.querySelector("#choice1");
  var choiceElement2 = document.querySelector("#choice2");
  var choiceElement3 = document.querySelector("#choice3");
  var choiceElement4 = document.querySelector("#choice4");
  questionTitleElement.textContent = currentQuestion.questionTitle;
  choiceElement1.textContent = currentQuestion.choices[0];
  choiceElement2.textContent = currentQuestion.choices[1];
  choiceElement3.textContent = currentQuestion.choices[2];
  choiceElement4.textContent = currentQuestion.choices[3];
}

// Need to make a click event.

// don't forget the "this" keyword, it will determine if the user clicked on the right answer.

// use set attribute when i need to clear the page and display a score.

startButton.addEventListener("click", function () {
  displayOnPage();
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
