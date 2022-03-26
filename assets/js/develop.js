var count = 60;
//  Select increment and decrement button elements
var startButton = document.querySelector(".start-button");
var timerCountDown = document.querySelector(".timer-count");
var plusButton = document.querySelector(".add-point");
var currentQuestionIndex = 0;
score = 0;
var scoreBox = document.querySelector(".timer-score-boxes");

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
// FUNCTION
// make event listener because they have to click an option, target the question class on the buttons
// ------ this is not visible to the user
// make sure if they selected the right or wrong answer, or run a "match"
// if answer is wrong, take off time, if right, do nothing.
// -------- clear the area it is trying to be loaded and then load the next question
// load the next question
// reference the question object
// target the 2nd object in the array then bring that forward to the UI.
// 


// // Delegate event listener to the parent element, <div id="buttons">
// buttonListEl.on('click', '.letter-button', function (event) {
//   var displayLetterEl = $('<div>');

//   displayLetterEl.addClass('letter');

//   // get letter from clicked letter button's `data-letter` attribute and use it for display
//   displayLetterEl.text($(event.target).attr('data-letter'));
//   displayEl.append(displayLetterEl);
// });

// REPURPOSE THE ABOVE CODE


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
      count = 60;
    }
  }, 1000);
});

plusButton.addEventListener("click", function () {

  scoreBox.textContent = score;
  score++;
});
