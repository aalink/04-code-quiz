var count = 100;
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
var endOfQuiz = document.querySelector(".quiz-box")

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
  console.log('working');
  userChoice = this.textContent
  console.log(userChoice);
  if (userChoice === question[currentQuestionIndex].answer) {
    console.log("CORRECT");
  
  } else {
    console.log("WRONG");
    count -= 10;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex === question.length) {
    // this will write a function to end the quiz.
    endQuiz()
  } else {
    displayQuestion(currentQuestionIndex);
  }
}

function endQuiz() {
  endOfQuiz.setAttribute("class", "hide")
}

// displayQuestion(0);

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
