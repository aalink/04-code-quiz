const quizQuestion1 = {
    question: "Which principle of software development is aimed at reducing repetition of software patterns?",
    correct: "DRY",
    wrongOption1: "AHA",
    wrongOption2: "WET",
    wrongOption3: "SRP",
};

const quizQuestion2 = {
    question: "Which programming language refers to key/value pairs as a dictionary?",
    correct: "Python",
    wrongOption1: "JavaScript",
    wrongOption2: "C++",
    wrongOption3: "Java",
};

const quizQuestion3 = {
    question: "Which company develops the Compute Unified Device Architecture, also known as CUDA?",
    correct: "Nvidia",
    wrongOption1: "Microsoft",
    wrongOption2: "Samsung",
    wrongOption3: "Google",

};

function askQuestion(questionNumber, attempt) {
    console.log(questionNumber.question)
    console.log("A) " + questionNumber.wrongOption1)
    console.log("B) " + questionNumber.wrongOption2)
    console.log("C) " + questionNumber.wrongOption3)
    console.log("D) " + questionNumber.wrongOption4)
    if (attempt === questionNumber.correct) {
        console.log("CORRECT")
    } else {
        console.log("WRONG")
    }
}

askQuestion(quizQuestion2, "Python")