const quizQuestion1 = {
    question: "Which principle of software development is aimed at reducing repetition of software patterns?",
    correct: "DRY",
    option1: "AHA",
    option2: "WET",
    option3: "SRP",
};

const quizQuestion2 = {
    question: "Which programming language refers to key/value pairs as a dictionary?",
    correct: "Python",
    option1: "JavaScript",
    option2: "C++",
    option3: "Java",
};

const quizQuestion3 = {
    question: "Which company develops the Compute Unified Device Architecture, also known as CUDA?",
    correct: "Nvidia",
    option1: "Microsoft",
    option2: "Samsung",
    option3: "Google",

};

function askQuestion(questionNumber, attempt) {
    console.log(questionNumber.question)
    console.log("A) " + questionNumber.option1)
    console.log("B) " + questionNumber.option2)
    console.log("C) " + questionNumber.option3)
    console.log("D) " + questionNumber.option4)
    if (attempt === questionNumber.correct) {
        console.log("CORRECT")
    } else {
        console.log("WRONG")
    }
}

askQuestion(quizQuestion2, "Python")